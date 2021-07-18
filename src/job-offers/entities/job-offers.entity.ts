import { EmployeeEntity } from '../../employee/entities/employee.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployerEntity } from '../../employers/entities/employers.entity';

@Entity('job_offer')
export class JobOfferEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  title: string;

  @ManyToOne(() => EmployerEntity, (employer) => employer.jobOffers, {
    eager: true,
  })
  employer: EmployerEntity;

  @Column({ type: 'date', nullable: false })
  dead_line: Date;

  // @OneToMany(() => JobScheduleEntity, (jobSchedule) => jobSchedule.jobOffer)
  // schedule: JobScheduleEntity[];

  @Column({ type: 'varchar', length: 700, nullable: false })
  special_requirements: string;

  @Column({ type: 'float', nullable: false })
  duration: number;

  @Column({ type: 'float', nullable: false })
  hourly_rate: number;

  @OneToOne(() => EmployeeEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinColumn({ name: 'employee_id' })
  employee: EmployeeEntity;

  @Column({ type: 'integer', nullable: true })
  status: number;

  // @OneToMany(() => ApplicationEntity, (application) => application.jobOffer)
  // applicants?: ApplicationEntity[];
}
