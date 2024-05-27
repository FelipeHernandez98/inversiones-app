import { PartialType } from '@nestjs/mapped-types';
import { CreateInvestorOfferDto } from './create-investor_offer.dto';

export class UpdateInvestorOfferDto extends PartialType(CreateInvestorOfferDto) {}
