import { User } from '../domain/user.model';
import { ReadUserDto } from '../dtos/read-user.dto';
export interface IUserService {
  getById(userId: number): Promise<ReadUserDto>;
}
