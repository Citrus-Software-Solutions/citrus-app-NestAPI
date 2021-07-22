import { JobOfferEntity } from '../../../job-offers/entities/job-offers.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployerEntity } from '../../../employers/entities/employers.entity';

@Entity('skill')
export class SkillEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'integer', nullable: false })
  category: number;

  @ManyToMany(() => JobOfferEntity, (jobOffer) => jobOffer.skills)
  @JoinTable({ name: 'skill_jobOffer' })
  jobOffer: JobOfferEntity[];

  @ManyToMany(() => EmployerEntity, (employer) => employer.skills)
  @JoinTable({ name: 'skill_employer' })
  employer: EmployerEntity[];
}
