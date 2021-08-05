import { UserEntity } from '../../user/entities/user.entity';

export interface IAuthPersistence {
  signin(userEntity: UserEntity): Promise<{ token: string }>;
}
