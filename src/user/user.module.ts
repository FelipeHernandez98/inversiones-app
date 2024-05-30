import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EncryptionService } from 'src/encryption/encryption.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService, EncryptionService],
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  exports: [
    UserService,
    TypeOrmModule
  ]
})
export class UserModule {}
