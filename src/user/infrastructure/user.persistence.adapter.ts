import { Injectable, NotFoundException } from '@nestjs/common';
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
    const userRepository = getRepository(UserEntity);
    const savedUser: UserEntity = await userRepository.save(user);
    return savedUser;
  }
}
