import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InvestorOfferService } from './investor_offer.service';
import { CreateInvestorOfferDto } from './dto/create-investor_offer.dto';
import { UpdateInvestorOfferDto } from './dto/update-investor_offer.dto';
import { PaginationDto } from 'src/common/pagination.dto';

@Controller('investor-offer')
export class InvestorOfferController {
  constructor(private readonly investorOfferService: InvestorOfferService) {}

  @Post()
  create(@Body() createInvestorOfferDto: CreateInvestorOfferDto) {
    return this.investorOfferService.create(createInvestorOfferDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.investorOfferService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.investorOfferService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvestorOfferDto: UpdateInvestorOfferDto) {
    return this.investorOfferService.update(id, updateInvestorOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.investorOfferService.remove(id);
  }
}
