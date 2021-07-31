import { User } from '../domain/user.model';

export interface IUserRepository {
  getById(userId: number): Promise<User>;
}
