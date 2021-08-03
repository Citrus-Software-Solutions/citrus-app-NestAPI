import { RoleEntity } from '../../../role/entities/role.entity';
import { DataMapper } from '../data-mapper.interface';
import { Role } from '../../../role/domain/role.model';

export class RoleDataMapper implements DataMapper<Role, RoleEntity> {
  public toDomain(entity: RoleEntity): Role {
    const role = new Role();
    role.id = entity.id;
    role.name = entity.name;
    role.permission = entity.permission;

    return role;
  }

  public toDalEntity(role: Role): RoleEntity {
    const roleEntity = new RoleEntity();
    roleEntity.id = role.id;
    roleEntity.name = role.name;
    roleEntity.permission = role.permission;

    return roleEntity;
  }
}
