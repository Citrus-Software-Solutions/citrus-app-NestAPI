import { EmployeeEntity } from '../../employee/entities/employee.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployerEntity } from '../../employers/entities/employers.entity';
import { JobScheduleEntity } from '../../jobs-schedule/entities/jobs-schedule.entity';
import { AddressEntity } from '../../shared/address/entities/address.entity';
import { SkillEntity } from '../../shared/skill/entities/skill.entity';
import { JobOfferStatus } from '../domain/job-offer-status.enum';

@Entity('job_offer')
export class JobOfferEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @ManyToOne(() => EmployerEntity, (employer) => employer.jobOffers, {
    eager: true,
  })
  employer: EmployerEntity;

  @ManyToOne(() => AddressEntity, (address) => address.employee, {
    eager: true,
  })
  location: AddressEntity;

  @Column({ type: 'date', nullable: false })
  dead_line: Date;

  @OneToMany(() => JobScheduleEntity, (jobSchedule) => jobSchedule.jobOffer, {
    eager: true,
  })
  schedule: JobScheduleEntity[];

  @ManyToMany(() => SkillEntity, (skill) => skill.jobOffer, {
    eager: true,
  })
  @JoinColumn()
  skills: SkillEntity[];

  @Column({ type: 'varchar', length: 700, nullable: true })
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

  @Column({
    type: 'enum',
    nullable: false,
    enum: JobOfferStatus,
    default: JobOfferStatus.Posted,
  })
  status: JobOfferStatus;

  // @OneToMany(() => ApplicationEntity, (application) => application.jobOffer)
  // applicants?: ApplicationEntity[];
}
