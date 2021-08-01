import { UserEntity } from '../../../user/entities/user.entity';
import { DataMapper } from '../data-mapper.interface';
import { User } from '../../../user/domain/user.model';
import { RoleDataMapper } from '../role/role.mapper';

export class UserDataMapper implements DataMapper<User, UserEntity> {
  _mapperRole = new RoleDataMapper();

  public toDomain(entity: UserEntity): User {
    const user = new User();
    user.id = entity.id;
    user.email = entity.email;
    user.username = entity.username;
    user.password = entity.password;
    user.status = entity.status;

    return user;
  }

  public toDalEntity(user: User): UserEntity {
    const userEntity = new UserEntity();
    userEntity.id = user.id;
    userEntity.email = user.email;
    userEntity.username = user.username;
    userEntity.password = user.password;
    userEntity.status = user.status;

    return userEntity;
  }
}
