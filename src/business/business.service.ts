import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Repository } from 'typeorm';
import { Business } from './entities/business.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/pagination.dto';
import { handleDBExceptions } from 'src/common/db-exception.util';
import { formatString } from 'src/common/string-format.util';
import { UserService } from 'src/user/user.service';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class BusinessService {

  private readonly logger = new Logger('BusinessService');

  constructor(
    @InjectRepository(Business)
    private readonly businessService: Repository<Business>,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService
  ){}

  async create(createBusinessDto: CreateBusinessDto) {

    await this.categoryService.findOne(createBusinessDto.idCategory);
    await this.userService.findOne(createBusinessDto.idRepresentative);

    try {
      createBusinessDto.name = formatString(createBusinessDto.name)
      const business = await this.businessService.create(createBusinessDto);
      business.registrationDate = new Date();
      business.state = "Active";
      await this.businessService.save(business);
      return business;   
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit= 10, offset= 0 } = paginationDto;
    const business = await this.businessService.find({
      take: limit,
      skip: offset
    })
    if (business.length <= 0) throw new NotFoundException('There are no records yet');
    return business;
  }

  async findOne(id: string) {
    let business = await this.businessService.findBy({ id });
    if ( business.length == 0) throw new NotFoundException(`Business with id: ${id} does not exist`);
    return business;
  }

  async update(id: string, updateBusinessDto: UpdateBusinessDto) {
    const business = await this.businessService.preload({id, ...updateBusinessDto})
    if (!business) throw new NotFoundException(`Business with id: ${id} does not exist`);

    try {
      await this.businessService.save(business);
    } catch (error) {
      handleDBExceptions(error);
    }
    return business;
  }

  async remove(id: string) {
    const business = await this.findOne(id);
    await this.businessService.remove(business);
    return `Business with nit: ${id} has been eliminated.`;
  }

}
