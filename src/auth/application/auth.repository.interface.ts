import { User } from '../../user/domain/user.model';

export interface IAuthRepository {
  signin(user: User): Promise<{ token: string }>;
}
