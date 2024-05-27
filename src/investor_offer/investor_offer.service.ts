import { Injectable } from '@nestjs/common';
import { CreateInvestorOfferDto } from './dto/create-investor_offer.dto';
import { UpdateInvestorOfferDto } from './dto/update-investor_offer.dto';

@Injectable()
export class InvestorOfferService {
  create(createInvestorOfferDto: CreateInvestorOfferDto) {
    return 'This action adds a new investorOffer';
  }

  findAll() {
    return `This action returns all investorOffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} investorOffer`;
  }

  update(id: number, updateInvestorOfferDto: UpdateInvestorOfferDto) {
    return `This action updates a #${id} investorOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} investorOffer`;
  }
}
