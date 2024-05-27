import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessOfferDto } from './create-business_offer.dto';

export class UpdateBusinessOfferDto extends PartialType(CreateBusinessOfferDto) {}
