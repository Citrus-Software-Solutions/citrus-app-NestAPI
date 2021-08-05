import { CreateUserDto } from '../dtos/create-user.dto';
import { CreatedUserDto } from '../dtos/created-user.dto';
import { ReadUserDto } from '../dtos/read-user.dto';
export interface IUserService {
  getById(userId: number): Promise<ReadUserDto>;
  createUser(user: CreateUserDto, userRole: string): Promise<CreatedUserDto>;
}
