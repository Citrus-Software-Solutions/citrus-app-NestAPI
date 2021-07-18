import { EmployeeEntity } from '../../employee/entities/employee.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('job_application')
export class ApplicationEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    default: 'Pending',
  })
  status: string;

  @Column({ type: 'date', nullable: false })
  date_aplication: Date;

  // @ManyToOne(() => JobOfferEntity, (jobOffer) => jobOffer.applicants, {
  //   primary: true,
  // })
  // jobOffer: JobOfferEntity;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.applications, {
    primary: true,
  })
  employee: EmployeeEntity;
}
