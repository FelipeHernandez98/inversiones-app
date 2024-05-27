import { Test, TestingModule } from '@nestjs/testing';
import { BusinessOfferService } from './business_offer.service';

describe('BusinessOfferService', () => {
  let service: BusinessOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessOfferService],
    }).compile();

    service = module.get<BusinessOfferService>(BusinessOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
