import { JobOfferEntity } from '../../job-offers/entities/job-offers.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('employers')
export class EmployerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  name: string;

  @OneToMany(() => JobOfferEntity, (jobOffer) => jobOffer.employer)
  jobOffers: JobOfferEntity[];
}
