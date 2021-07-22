import { JobOfferEntity } from '../../job-offers/entities/job-offers.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AddressEntity } from '../../shared/address/entities/address.entity';
import { ContactInformationEntity } from '../../contact-information/entities/contact-information.entity';

@Entity('employer')
export class EmployerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  company_name: string;

  @OneToOne(() => AddressEntity, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn()
  address: AddressEntity;

  @OneToMany(
    () => ContactInformationEntity,
    (contactInfo) => contactInfo.employer,
    {
      eager: true,
    },
  )
  contacts: ContactInformationEntity[];

  @Column({ type: 'varchar', length: 700, nullable: false })
  special_requirements: string;

  @Column({ type: 'integer', nullable: false })
  status: number;

  @OneToMany(() => JobOfferEntity, (jobOffer) => jobOffer.employer)
  jobOffers: JobOfferEntity[];
}
