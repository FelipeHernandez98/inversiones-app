import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { Business } from './entities/business.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { UserService } from 'src/user/user.service';
import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
import { EncryptionService } from 'src/encryption/encryption.service';

@Module({
  controllers: [BusinessController],
  providers: [
    BusinessService,
    CategoryService,
    UserService,
    EncryptionService
  ],
  imports: [
    TypeOrmModule.forFeature([
      Business,
      Category,
      User
    ])
  ],
  exports: [
    BusinessService,
    TypeOrmModule
  ]
})
export class BusinessModule {}
