import { UserEntity } from '../entities/user.entity';

export interface IUserPersistence {
  getById(offerId: number): Promise<UserEntity>;
  createUser(user: UserEntity, userRole: string): Promise<UserEntity>;
}
