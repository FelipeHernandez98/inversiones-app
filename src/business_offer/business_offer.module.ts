import { Module } from '@nestjs/common';
import { BusinessOfferService } from './business_offer.service';
import { BusinessOfferController } from './business_offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessOffer } from './entities/business_offer.entity';

@Module({
  controllers: [BusinessOfferController],
  providers: [BusinessOfferService],
  imports: [
    TypeOrmModule.forFeature([BusinessOffer])
  ],
  exports: [
    BusinessOfferService,
    TypeOrmModule
  ]
})
export class BusinessOfferModule {}
