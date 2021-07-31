import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IUserPersistence } from '../application/user.persistence.interface';
import { UserEntity } from '../entities/user.entity';

@EntityRepository(UserEntity)
@Injectable()
export class UserPersistenceAdapter
  extends Repository<UserEntity>
  implements IUserPersistence
{
  async getById(userId: number): Promise<UserEntity> {
    const userRepository = getRepository(UserEntity);

    const existOffer = await userRepository.findOne(userId);

    if (!existOffer) {
      throw new NotFoundException('This offer does not exist');
    }

    return existOffer;
  }
}
