import { Module } from '@nestjs/common';
import { BusinessOfferService } from './business_offer.service';
import { BusinessOfferController } from './business_offer.controller';

@Module({
  controllers: [BusinessOfferController],
  providers: [BusinessOfferService],
})
export class BusinessOfferModule {}
