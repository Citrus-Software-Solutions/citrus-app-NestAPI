import { Inject, Injectable } from '@nestjs/common';
import { UserDataMapper } from '../../shared/mappers/user/user.mapper';
import { UserEntity } from '../../user/entities/user.entity';
import { User } from '../../user/domain/user.model';
import { IAuthPersistence } from './auth.persistence.interface';
import { IAuthRepository } from './auth.repository.interface';

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(
    @Inject('AuthPersistenceAdapter')
    private readonly _authPersistence: IAuthPersistence,
    private readonly _mapper: UserDataMapper,
  ) {}

  async signin(user: User): Promise<{ token: string; id: number }> {
    const userEntity: UserEntity = this._mapper.toDalEntity(user);

    return await this._authPersistence.signin(userEntity);
  }
}
