import { Employee } from 'src/employee/domain/employee.model';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { Employer } from 'src/employers/domain/employer.model';
import { EmployerEntity } from 'src/employers/entities/employers.entity';
import { JobOffer } from 'src/job-offers/domain/job-offer.model';
import { JobOfferEntity } from 'src/job-offers/entities/job-offers.entity';
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

  @OneToMany(() => EmployeeEntity, (employee) => employee.address, {
    eager: true,
  })
  employee: Employee[];

  @OneToMany(() => EmployerEntity, (employer) => employer.address, {
    eager: true,
  })
  employer: Employer[];

  @OneToMany(() => JobOfferEntity, (jobOffer) => jobOffer.location, {
    eager: true,
  })
  job_offer: JobOffer[];
}
