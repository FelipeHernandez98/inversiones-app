import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BusinessOfferService } from './business_offer.service';
import { CreateBusinessOfferDto } from './dto/create-business_offer.dto';
import { UpdateBusinessOfferDto } from './dto/update-business_offer.dto';
import { PaginationDto } from 'src/common/pagination.dto';

@Controller('business-offer')
export class BusinessOfferController {
  constructor(private readonly businessOfferService: BusinessOfferService) {}

  @Post()
  create(@Body() createBusinessOfferDto: CreateBusinessOfferDto) {
    return this.businessOfferService.create(createBusinessOfferDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.businessOfferService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessOfferService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessOfferDto: UpdateBusinessOfferDto) {
    return this.businessOfferService.update(id, updateBusinessOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessOfferService.remove(id);
  }
}
