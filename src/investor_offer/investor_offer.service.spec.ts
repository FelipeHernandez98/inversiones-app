import { Test, TestingModule } from '@nestjs/testing';
import { InvestorOfferService } from './investor_offer.service';

describe('InvestorOfferService', () => {
  let service: InvestorOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestorOfferService],
    }).compile();

    service = module.get<InvestorOfferService>(InvestorOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
