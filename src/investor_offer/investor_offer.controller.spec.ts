import { Test, TestingModule } from '@nestjs/testing';
import { InvestorOfferController } from './investor_offer.controller';
import { InvestorOfferService } from './investor_offer.service';

describe('InvestorOfferController', () => {
  let controller: InvestorOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestorOfferController],
      providers: [InvestorOfferService],
    }).compile();

    controller = module.get<InvestorOfferController>(InvestorOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
