import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BusinessModule } from './business/business.module';
import { BusinessOfferModule } from './business_offer/business_offer.module';
import { InvestorOfferModule } from './investor_offer/investor_offer.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      schema: process.env.DB_SCHEMA,
      entities: [
        
      ]
    }),

    UserModule, 
    BusinessModule, 
    BusinessOfferModule, 
    InvestorOfferModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
