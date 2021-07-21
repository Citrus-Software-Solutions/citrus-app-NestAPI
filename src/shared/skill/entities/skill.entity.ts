import { JobOfferEntity } from '../../../job-offers/entities/job-offers.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('skill')
export class SkillEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'integer', nullable: false })
  category: number;

  @ManyToOne(() => JobOfferEntity, (jobOffer) => jobOffer.schedule)
  jobOffer: JobOfferEntity;
}
