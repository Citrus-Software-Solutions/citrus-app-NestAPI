import { EmployerEntity } from '../../employers/entities/employers.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { RoleEntity } from '../../role/entities/role.entity';
import { EmployeeEntity } from '../../employee/entities/employee.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    length: 100,
  })
  username: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    length: 100,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 8,
    default: 'ACTIVE',
  })
  status: string;

  @OneToOne(() => EmployerEntity, (employer) => employer.user, {
    nullable: true,
  })
  employer: EmployerEntity;

  @OneToOne(() => EmployeeEntity, (employee) => employee.user, {
    nullable: true,
  })
  employee: EmployeeEntity;

  @ManyToOne(() => RoleEntity, (role) => role.users, {
    eager: true,
  })
  @JoinColumn({ name: 'fk_role' })
  role: RoleEntity;
}
