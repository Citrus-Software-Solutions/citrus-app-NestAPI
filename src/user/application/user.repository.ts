import { Inject, Injectable } from '@nestjs/common';
import { UserDataMapper } from '../../shared/mappers/user/user.mapper';
import { User } from '../domain/user.model';
import { IUserPersistence } from './user.persistence.interface';
import { IUserRepository } from './user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject('UserPersistenceAdapter')
    private readonly _userPersistence: IUserPersistence,
    private readonly _mapper: UserDataMapper,
  ) {}

  async getById(userId: number): Promise<User> {
    const userEntity = await this._userPersistence.getById(userId);

    return this._mapper.toDomain(userEntity);
  }
}
