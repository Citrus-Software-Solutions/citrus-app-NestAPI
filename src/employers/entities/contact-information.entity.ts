import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployerEntity } from './employers.entity';

@Entity('contact_information')
export class ContactInformationEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  full_name: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  job_title: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  phone_number: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  email: string;

  @ManyToOne(() => EmployerEntity, (employer) => employer.contacts)
  employer: EmployerEntity;
}
