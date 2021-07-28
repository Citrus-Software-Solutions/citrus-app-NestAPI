import { EmployerEntity } from '../../employers/entities/employers.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    length: 25,
  })
  username: string;
  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    length: 25,
  })
  email: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;
  @OneToOne(() => EmployerEntity, (employer) => employer.user, {
    nullable: true,
    eager: true,
  })
  employer: EmployerEntity;
}
