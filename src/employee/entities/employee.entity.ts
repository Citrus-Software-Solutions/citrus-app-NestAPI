import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApplicationEntity } from '../../application/entities/application.entity';

@Entity('employee')
export class EmployeeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  name: string;

  @Column({ type: 'varchar', enum: ['M', 'F'] })
  gender: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  second_name: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  last_name: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  second_lastname: string;

  @Column({ type: 'date', nullable: false })
  birth_date: Date;

  @OneToMany(() => ApplicationEntity, (application) => application.employee)
  applications: ApplicationEntity[];
}
