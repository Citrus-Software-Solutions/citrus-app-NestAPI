import { RoleEntity } from '../../../role/entities/role.entity';
import { DataMapper } from '../data-mapper.interface';
import { Role } from '../../../role/domain/role.model';
import { UserDataMapper } from '../user/user.mapper';

export class RoleDataMapper implements DataMapper<Role, RoleEntity> {
  public toDomain(entity: RoleEntity): Role {
    const role = new Role();
    role.id = entity.id;
    role.permission = entity.permission;

    return role;
  }

  public toDalEntity(role: Role): RoleEntity {
    const roleEntity = new RoleEntity();
    roleEntity.id = role.id;
    roleEntity.permission = role.permission;

    return roleEntity;
  }
}
