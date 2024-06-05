import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BusinessModule } from './business/business.module';
import { BusinessOfferModule } from './business_offer/business_offer.module';
import { InvestorOfferModule } from './investor_offer/investor_offer.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './business/entities/business.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { EncryptionService } from './encryption/encryption.service';
import { EncryptionModule } from './encryption/encryption.module';
import { User } from './user/entities/user.entity';
import { BusinessOffer } from './business_offer/entities/business_offer.entity';
import { InvestorOffer } from './investor_offer/entities/investor_offer.entity';


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
          Business,
          Category,
          User,
          BusinessOffer,
          InvestorOffer
      ]
    }),

    UserModule, 
    BusinessModule, 
    BusinessOfferModule, 
    InvestorOfferModule, CategoryModule, EncryptionModule],
  controllers: [],
  providers: [EncryptionService],
})
export class AppModule {}
