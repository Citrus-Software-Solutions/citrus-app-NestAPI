import { ApplicationEntity } from '../../application/entities/application.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployerEntity } from '../../employers/entities/employers.entity';

@Entity('job_offer')
export class JobOfferEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 700, nullable: false })
  description: string;

  @Column({ type: 'integer', nullable: false })
  available_vacans: number;

  @Column({ type: 'date', nullable: false })
  date_begin: Date;

  @Column({ type: 'date', nullable: false })
  date_end: Date;

  @Column({ type: 'varchar', enum: ['Hidden', 'Published'] })
  status: string;

  @Column({ type: 'varchar', enum: ['M', 'F'] })
  gender: string;

  @Column({ type: 'float', nullable: false })
  salary: number;

  @Column({ type: 'integer', nullable: true })
  min_age: number;

  @Column({ type: 'integer', nullable: true })
  max_age: number;

  @ManyToOne(() => EmployerEntity, (employer) => employer.jobOffers, {
    eager: true,
  })
  employer: EmployerEntity;

  @OneToMany(() => ApplicationEntity, (application) => application.jobOffer)
  applicants?: ApplicationEntity[];
}
