import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobOfferEntity } from '../../job-offers/entities/job-offers.entity';
import { AddressEntity } from '../../shared/address/entities/address.entity';
import { SkillEntity } from '../../shared/skill/entities/skill.entity';
import { EmployerStatusEnum } from '../domain/employer-status.enum';
import { ContactInformationEntity } from './contact-information.entity';

@Entity('employer')
export class EmployerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  company_name: string;

  @Column({ type: 'text', nullable: false })
  logo: string;

  @Column({ type: 'text', array: true, nullable: false })
  special_requirements: string[];

  @Column({
    type: 'enum',
    enum: EmployerStatusEnum,
    default: EmployerStatusEnum.Active,
  })
  status: EmployerStatusEnum;

  @OneToOne(() => AddressEntity, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn()
  address: AddressEntity;

  @OneToMany(() => ContactInformationEntity, (contacts) => contacts.employer, {
    eager: true,
  })
  contacts: ContactInformationEntity[];

  @OneToMany(() => SkillEntity, (skills) => skills.jobOffer, {
    eager: true,
  })
  skills: SkillEntity[];

  @OneToMany(() => JobOfferEntity, (jobOffer) => jobOffer.employer)
  jobOffers: JobOfferEntity[];
}
