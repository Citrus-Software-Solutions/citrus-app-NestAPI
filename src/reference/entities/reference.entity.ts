import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployeeEntity } from '../../employee/entities/employee.entity';

@Entity('references')
export class ReferenceEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  full_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  job_title: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  company_name: string;

  @Column({ type: 'varchar', nullable: false })
  phone_number: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.references)
  employee: EmployeeEntity;
}
