import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { IRolePersistence } from '../application/role.persistence.interface';
import { RoleEntity } from '../entities/role.entity';

@EntityRepository(RoleEntity)
@Injectable()
export class RolePersistenceAdapter
  extends Repository<RoleEntity>
  implements IRolePersistence {}
