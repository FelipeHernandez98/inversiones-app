import { BadRequestException, InternalServerErrorException, Logger } from '@nestjs/common';

const logger = new Logger('DBExceptionUtil');

export function handleDBExceptions(error: any): never {
  if (error.code === '23505') {
    throw new BadRequestException(error.detail);
  }
  
  logger.error(error);
  throw new InternalServerErrorException('Unknown error, check server logs');
}