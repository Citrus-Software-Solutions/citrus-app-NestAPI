import { UserEntity } from '../../user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roles')
export class RoleEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 20,
  })
  name: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  permission: string;

  @OneToMany(() => UserEntity, (user) => user.role)
  users: UserEntity[];
}
