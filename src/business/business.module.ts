import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { Business } from './entities/business.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BusinessController],
  providers: [BusinessService],
  imports: [
    TypeOrmModule.forFeature([Business])
  ],
  exports: [
    BusinessService,
    TypeOrmModule
  ]
})
export class BusinessModule {}
