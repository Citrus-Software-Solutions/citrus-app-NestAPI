import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobOfferEntity } from '../../job-offers/entities/job-offers.entity';
import { EmployeeEntity } from '../../employee/entities/employee.entity';

@Entity('job_application')
export class ApplicationEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    enum: ['Pending', 'Accepted', 'Rejected'],
    nullable: false,
  })
  status: string;

  @Column({ type: 'date', nullable: false })
  date_aplication: Date;

  @ManyToOne(() => JobOfferEntity, (jobOffer) => jobOffer.applicants, {
    primary: true,
  })
  jobOffer: JobOfferEntity;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.applications, {
    primary: true,
  })
  employee: EmployeeEntity;
}
