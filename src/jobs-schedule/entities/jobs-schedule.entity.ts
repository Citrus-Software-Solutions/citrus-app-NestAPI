import { JobOfferEntity } from '../../job-offers/entities/job-offers.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('jobs_schedule')
export class JobScheduleEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'timestamp', nullable: false })
  date_ini: Date;

  @Column({ type: 'timestamp', nullable: false })
  date_end: Date;

  @ManyToOne(() => JobOfferEntity, (jobOffer) => jobOffer.schedule)
  jobOffer: JobOfferEntity;
}
