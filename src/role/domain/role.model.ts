import { User } from '../../user/domain/user.model';

export class Role {
  public id: number;
  public name: string;
  public permission: string;
  public users: User[];
}
