import { Module } from '@nestjs/common';
import { InvestorOfferService } from './investor_offer.service';
import { InvestorOfferController } from './investor_offer.controller';

@Module({
  controllers: [InvestorOfferController],
  providers: [InvestorOfferService],
})
export class InvestorOfferModule {}
