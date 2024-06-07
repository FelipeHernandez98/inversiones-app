import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { handleDBExceptions } from 'src/common/db-exception.util';
import { PaginationDto } from 'src/common/pagination.dto';
import { formatString } from 'src/common/string-format.util';

@Injectable()
export class CategoryService {

  private readonly logger = new Logger('CategoryService');

  constructor(
    @InjectRepository(Category)
    private readonly categoryService: Repository<Category>
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      createCategoryDto.name = formatString(createCategoryDto.name)
      const category = await this.categoryService.create(createCategoryDto);
      await this.categoryService.save(category);
      return category;   
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit= 10, offset= 0 } = paginationDto;
    const category = await this.categoryService.find({
      take: limit,
      skip: offset
    })
    if (category.length <= 0) throw new NotFoundException('There are no records yet');
    return category;
  }

  async findOne(id: number) {
    let category = await this.categoryService.findBy({ id });
    if ( category.length == 0) throw new NotFoundException(`Category with id: ${id} does not exist`);
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryService.preload({id, ...updateCategoryDto})
    if (!category) throw new NotFoundException(`category with id: ${id} does not exist`);

    try {
      await this.categoryService.save(category);
    } catch (error) {
      handleDBExceptions(error);
    }
    return category;
  }

  async remove(id: number) {
    const category = await this.findOne(id);
    await this.categoryService.remove(category);
    return `Business with id: ${id} has been eliminated.`;
  }
}
