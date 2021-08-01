import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserDataMapper } from '../../shared/mappers/user/user.mapper';
import { User } from '../domain/user.model';
import { DataUserDto } from '../dtos/data-user.dto';
import { UserEntity } from '../entities/user.entity';
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
  async createUser(user: DataUserDto): Promise<User> {
    const realUser = this.dtoUserToReal(user);
    const userEntity: UserEntity = await this._mapper.toDalEntity(realUser);
    const createdUser: UserEntity = await this._userPersistence.createUser(
      userEntity,
    );
    if (!createdUser) {
      throw new BadRequestException('User could not be created');
    }
    return this._mapper.toDomain(createdUser);
  }
  private dtoUserToReal(dtoUser: DataUserDto) {
    const realUser = new User();
    realUser.username = dtoUser.username;
    realUser.email = dtoUser.email;
    realUser.password = dtoUser.password;
    realUser.status = 'ACTIVE';
    return realUser;
  }
}
