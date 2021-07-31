import { Role } from '../../role/domain/role.model';

export class User {
  public id: number;
  public username: string;
  public email: string;
  public password: string;
  public status: string;

  public role: Role;
}
