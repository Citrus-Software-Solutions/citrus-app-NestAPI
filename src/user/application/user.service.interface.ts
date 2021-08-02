import { User } from '../domain/user.model';
import { DataUserDto } from '../dtos/data-user.dto';
import { ReadUserDto } from '../dtos/read-user.dto';
export interface IUserService {
  getById(userId: number): Promise<ReadUserDto>;
  createUser(user: DataUserDto, userRole: string): Promise<User>;
}
