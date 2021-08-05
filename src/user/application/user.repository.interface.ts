import { User } from '../domain/user.model';
import { CreateUserDto } from '../dtos/create-user.dto';

export interface IUserRepository {
  getById(userId: number): Promise<User>;
  createUser(user: CreateUserDto, userRole: string): Promise<User>;
}
