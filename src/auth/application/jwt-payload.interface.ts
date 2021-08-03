import { Role } from '../../role/domain/role.model';

export interface IJwtPayload {
  id: number;
  username: string;
  email: string;
  role: Role;
  iat?: Date;
}
