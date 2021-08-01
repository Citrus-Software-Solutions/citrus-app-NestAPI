import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IRolePersistence } from 'src/role/application/role.persistence.interface';
import { Role } from 'src/role/domain/role.model';
import { RoleEntity } from 'src/role/entities/role.entity';
import { RolePersistenceAdapter } from 'src/role/infrastructure/role.persistence.adapter';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IUserPersistence } from '../application/user.persistence.interface';
import { User } from '../domain/user.model';
import { UserEntity } from '../entities/user.entity';

@EntityRepository(UserEntity)
@Injectable()
export class UserPersistenceAdapter
  extends Repository<UserEntity>
  implements IUserPersistence
{
  constructor(
    @Inject('RolePersistenceAdapter')
    private readonly _rolePersistence: RolePersistenceAdapter,
  ) {
    super();
  }
  async getById(userId: number): Promise<UserEntity> {
    const userRepository = getRepository(UserEntity);

    const existUser: UserEntity = await userRepository.findOne(userId, {
      where: { status: 'ACTIVE' },
    });

    if (!existUser) {
      throw new NotFoundException('This user does not exist');
    }

    return existUser;
  }
  async createUser(user: UserEntity): Promise<UserEntity> {
    const roleEntity: RoleEntity = await this._rolePersistence.findOne({
      where: { role: 'EMPLOYER' },
    });
    if (!roleEntity) {
      throw new NotFoundException();
    }

    const userRepository = getRepository(UserEntity);
    const savedUser: UserEntity = await userRepository.save({
      username: user.username,
      password: user.password,
      email: user.email,
      role: roleEntity,
    });
    return savedUser;
  }
}
