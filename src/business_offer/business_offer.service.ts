import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateBusinessOfferDto } from './dto/create-business_offer.dto';
import { UpdateBusinessOfferDto } from './dto/update-business_offer.dto';
import { Repository } from 'typeorm';
import { BusinessOffer } from './entities/business_offer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { handleDBExceptions } from 'src/common/db-exception.util';
import { PaginationDto } from 'src/common/pagination.dto';

@Injectable()
export class BusinessOfferService {

  private readonly logger = new Logger('BusinessOfferService');

  constructor(
    @InjectRepository(BusinessOffer)
    private readonly businessOfferService: Repository<BusinessOffer>
  ){}

  async create(createBusinessOfferDto: CreateBusinessOfferDto) {
    try {
      const businessOffer = await this.businessOfferService.create(createBusinessOfferDto);
      businessOffer.registrationDate = new Date();
      businessOffer.state = "Active";
      await this.businessOfferService.save(businessOffer);
      return businessOffer;   
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit= 10, offset= 0 } = paginationDto;
    const businessOffer = await this.businessOfferService.find({
      take: limit,
      skip: offset
    })
    if (businessOffer.length <= 0) throw new NotFoundException('There are no records yet');
    return businessOffer;
  }

  async findOne(id: string) {
    let businessOffer = await this.businessOfferService.findBy({ id });
    if ( businessOffer.length == 0) throw new NotFoundException(`BusinessOffer with id: ${id} does not exist`);
    return businessOffer;
  }

  async update(id: string, updateBusinessOfferDto: UpdateBusinessOfferDto) {
    const businessOffer = await this.businessOfferService.preload({id, ...updateBusinessOfferDto})
    if (!businessOffer) throw new NotFoundException(`BusinessOffer with id: ${id} does not exist`);

    try {
      await this.businessOfferService.save(businessOffer);
    } catch (error) {
      handleDBExceptions(error);
    }
    return businessOffer;
  }

  async remove(id: string) {
    const businessOffer = await this.findOne(id);
    await this.businessOfferService.remove(businessOffer);
    return `BusinessOffer with nit: ${id} has been eliminated.`;
  }
}
