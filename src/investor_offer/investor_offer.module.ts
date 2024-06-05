import { Module } from '@nestjs/common';
import { InvestorOfferService } from './investor_offer.service';
import { InvestorOfferController } from './investor_offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestorOffer } from './entities/investor_offer.entity';

@Module({
  controllers: [InvestorOfferController],
  providers: [InvestorOfferService],
  imports: [
    TypeOrmModule.forFeature([InvestorOffer])
  ],
  exports: [
    InvestorOfferService,
    TypeOrmModule
  ]
})
export class InvestorOfferModule {}
