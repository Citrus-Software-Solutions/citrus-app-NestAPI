import { Employee } from '../../../employee/domain/employee.model';
import { EmployeeEntity } from '../../../employee/entities/employee.entity';
import { Employer } from '../../../employers/domain/employer.model';
import { EmployerEntity } from '../../../employers/entities/employers.entity';
import { JobOffer } from '../../../job-offers/domain/job-offer.model';
import { JobOfferEntity } from '../../../job-offers/entities/job-offers.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('address')
export class AddressEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  street_one: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  street_two: string;

  @Column({ type: 'varchar', length: 45, nullable: false })
  city: string;

  @Column({ type: 'varchar', length: 45, nullable: false })
  state: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  zip: string;

  @OneToMany(() => EmployeeEntity, (employee) => employee.address)
  employee: Employee[];

  @OneToMany(() => EmployerEntity, (employer) => employer.address)
  employer: Employer[];

  @OneToMany(() => JobOfferEntity, (jobOffer) => jobOffer.location)
  job_offer: JobOffer[];
}
