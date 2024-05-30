import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { handleDBExceptions } from 'src/common/db-exception.util';
import { EncryptionService } from 'src/encryption/encryption.service';
import { formatString } from 'src/common/string-format.util';
import { PaginationDto } from 'src/common/pagination.dto';

@Injectable()
export class UserService {

  private readonly logger = new Logger('UserService');

  constructor(
    @InjectRepository(User)
    private readonly userService: Repository<User>,
    private readonly encryptionService: EncryptionService,
  ){}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userService.findBy({email: createUserDto.email});
        if (existingUser.length > 0) {
            throw new ConflictException('A User with the same email already exists.');
        }
    try {
      const user = await this.userService.create(createUserDto);
      const hashedPassword = await this.encryptionService.hashPassword(user.password);
      user.password = hashedPassword;
      user.name = formatString(user.name);
      user.lastname = formatString(user.lastname);
      user.registrationDate = new Date();
      user.state = user.state === "" ? "Active" : user.state;
      user.isValid = false;
      await this.userService.save(user);
      delete user.password;
      return user;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit= 10, offset= 0 } = paginationDto;
    const user = await this.userService.find({
      take: limit,
      skip: offset
    })
    if (user.length <= 0) throw new NotFoundException('There are no records yet');
    return user;
  }

  async findOne(id: string) {
    let user = await this.userService.findBy({ id });
    if ( user.length == 0) throw new NotFoundException(`User with id: ${id} does not exist`);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userService.preload({id, ...updateUserDto})
    if (!user) throw new NotFoundException(`User with id: ${id} does not exist`);

    try {
      await this.userService.save(user);
    } catch (error) {
      handleDBExceptions(error);
    }
    return user;
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    await this.userService.remove(user);
    return `User with nit: ${id} has been eliminated.`;
  }
}
