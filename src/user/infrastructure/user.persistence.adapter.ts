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
      throw new NotFoundException('This offer does not exist');
    }

    return existUser;
  }
}
