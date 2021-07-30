import { User } from '../../user/domain/user.model';

export class Role {
  public id: number;
  public role: string;
  public permission: string;
  public users: User[];
}
