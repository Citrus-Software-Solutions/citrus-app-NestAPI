import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { genSalt, hash } from 'bcryptjs';
import { RoleEntity } from 'src/role/entities/role.entity';
import { RolePersistenceAdapter } from 'src/role/infrastructure/role.persistence.adapter';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IUserPersistence } from '../application/user.persistence.interface';
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

  async createUser(user: UserEntity, userRole: string): Promise<UserEntity> {
    let roleEntity: RoleEntity;
    if (userRole == 'EMPLOYER') {
      roleEntity = await this._rolePersistence.findOne({
        where: { name: 'EMPLOYER' },
      });
    } else if (userRole == 'EMPLOYEE') {
      roleEntity = await this._rolePersistence.findOne({
        where: { name: 'EMPLOYEE' },
      });
    } else if (userRole == 'STAFF MEMBER') {
      roleEntity = await this._rolePersistence.findOne({
        where: { name: 'STAFF MEMBER' },
      });
    }

    if (!roleEntity) {
      throw new NotFoundException('Role not exist');
    }

    const userRepository = getRepository(UserEntity);

    const userExist = await userRepository.find({ username: user.username });

    if (!userExist) {
      throw new InternalServerErrorException('This username already exist');
    }

    const salt = await genSalt(10);

    const savedUser: UserEntity = await userRepository.save({
      username: user.username,
      password: await hash(user.password, salt),
      email: user.email,
      role: roleEntity,
    });
    return savedUser;
  }
}
