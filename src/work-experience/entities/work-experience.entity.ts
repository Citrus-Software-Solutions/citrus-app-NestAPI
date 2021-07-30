import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployeeEntity } from '../../employee/entities/employee.entity';

@Entity('work_experience')
export class WorkExperienceEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  job_title: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  company_name: string;

  @Column({ type: 'integer', nullable: false })
  category: number;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.work_experiences)
  employee: EmployeeEntity;
}
