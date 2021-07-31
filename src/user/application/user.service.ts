import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/user.model';
import { IUserService } from '../application/user.service.interface';
import { IUserRepository } from '../application/user.repository.interface';
import { ReadUserDto } from '../dtos/read-user.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('UserRepository')
    private readonly _userRepository: IUserRepository,
  ) {}

  async getById(userId: number): Promise<ReadUserDto> {
    if (!userId) {
      throw new BadRequestException('id must be sent');
    }

    return plainToClass(ReadUserDto, this._userRepository.getById(userId));
  }
}
