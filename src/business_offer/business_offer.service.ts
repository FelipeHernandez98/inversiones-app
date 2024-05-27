import { Injectable } from '@nestjs/common';
import { CreateBusinessOfferDto } from './dto/create-business_offer.dto';
import { UpdateBusinessOfferDto } from './dto/update-business_offer.dto';

@Injectable()
export class BusinessOfferService {
  create(createBusinessOfferDto: CreateBusinessOfferDto) {
    return 'This action adds a new businessOffer';
  }

  findAll() {
    return `This action returns all businessOffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessOffer`;
  }

  update(id: number, updateBusinessOfferDto: UpdateBusinessOfferDto) {
    return `This action updates a #${id} businessOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessOffer`;
  }
}
