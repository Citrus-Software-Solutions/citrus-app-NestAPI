import { EmployerEntity } from '../../employers/entities/employers.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('contact_information')
export class ContactInformationEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  full_name: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  job_title: string;

  @Column({ type: 'varchar', nullable: false })
  phone_number: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @ManyToOne(() => EmployerEntity, (jobOffer) => jobOffer.contacts)
  employer: EmployerEntity;
}
