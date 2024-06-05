import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateInvestorOfferDto } from './dto/create-investor_offer.dto';
import { UpdateInvestorOfferDto } from './dto/update-investor_offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestorOffer } from './entities/investor_offer.entity';
import { Repository } from 'typeorm';
import { handleDBExceptions } from 'src/common/db-exception.util';
import { PaginationDto } from 'src/common/pagination.dto';

@Injectable()
export class InvestorOfferService {

  private readonly logger = new Logger('InvestorOfferService');

  constructor(
    @InjectRepository(InvestorOffer)
    private readonly investorOfferService: Repository<InvestorOffer>
  ){}

  async create(createInvestorOfferDto: CreateInvestorOfferDto) {
    try {
      const investorOffer = await this.investorOfferService.create(createInvestorOfferDto);
      investorOffer.registrationDate = new Date();
      investorOffer.state = "Active";
      await this.investorOfferService.save(investorOffer);
      return investorOffer;   
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit= 10, offset= 0 } = paginationDto;
    const investorOffer = await this.investorOfferService.find({
      take: limit,
      skip: offset
    })
    if (investorOffer.length <= 0) throw new NotFoundException('There are no records yet');
    return investorOffer;
  }

  async findOne(id: string) {
    let investorOffer = await this.investorOfferService.findBy({ id });
    if ( investorOffer.length == 0) throw new NotFoundException(`InvestorOffer with id: ${id} does not exist`);
    return investorOffer;
  }

  async update(id: string, updateInvestorOfferDto: UpdateInvestorOfferDto) {
    const investorOffer = await this.investorOfferService.preload({id, ...updateInvestorOfferDto})
    if (!investorOffer) throw new NotFoundException(`InvestorOffer with id: ${id} does not exist`);

    try {
      await this.investorOfferService.save(investorOffer);
    } catch (error) {
      handleDBExceptions(error);
    }
    return investorOffer;
  }

  async remove(id: string) {
    const investorOffer = await this.findOne(id);
    await this.investorOfferService.remove(investorOffer);
    return `InvestorOffer with nit: ${id} has been eliminated.`;
  }
}
