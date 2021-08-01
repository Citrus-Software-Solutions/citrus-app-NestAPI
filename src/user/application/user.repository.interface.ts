import { User } from '../domain/user.model';
import { DataUserDto } from '../dtos/data-user.dto';
import { ReadUserDto } from '../dtos/read-user.dto';

export interface IUserRepository {
  getById(userId: number): Promise<User>;
  createUser(user: DataUserDto): Promise<User>;
}
