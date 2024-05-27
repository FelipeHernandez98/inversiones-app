import { Test, TestingModule } from '@nestjs/testing';
import { BusinessOfferController } from './business_offer.controller';
import { BusinessOfferService } from './business_offer.service';

describe('BusinessOfferController', () => {
  let controller: BusinessOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessOfferController],
      providers: [BusinessOfferService],
    }).compile();

    controller = module.get<BusinessOfferController>(BusinessOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
