import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUserPersistence } from '../application/user.persistence.interface';

@EntityRepository(UserEntity)
export class UserPersistenceAdapter
  extends Repository<UserEntity>
  implements IUserPersistence {}
