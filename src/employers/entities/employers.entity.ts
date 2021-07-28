import { JobOfferEntity } from '../../job-offers/entities/job-offers.entity';
import { UserEntity } from '../../user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('employer')
export class EmployerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  name: string;

  @OneToMany(() => JobOfferEntity, (jobOffer) => jobOffer.employer)
  jobOffers: JobOfferEntity[];

  @OneToOne(() => UserEntity, (user) => user.employer, {
    nullable: true,
  })
  @JoinColumn({ name: 'fk_user' })
  user: UserEntity;
}
