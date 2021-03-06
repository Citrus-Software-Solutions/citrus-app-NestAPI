import { JobOfferEntity } from '../../job-offers/entities/job-offers.entity';
import { UserEntity } from '../../user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ContactInformationEntity } from '../../contact-information/entities/contact-information.entity';
import { SkillEntity } from '../../shared/skill/entities/skill.entity';
import { AddressEntity } from '../../shared/address/entities/address.entity';

@Entity('employer')
export class EmployerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  company_name: string;

  @ManyToOne(() => AddressEntity, (address) => address.employee, {
    eager: true,
  })
  address: AddressEntity;

  @OneToMany(
    () => ContactInformationEntity,
    (contactInfo) => contactInfo.employer,
    {
      eager: true,
    },
  )
  contacts: ContactInformationEntity[];

  @ManyToMany(() => SkillEntity, (skill) => skill.employer, {
    eager: true,
  })
  @JoinColumn()
  skills: SkillEntity[];

  @Column({ type: 'varchar', length: 700, nullable: false })
  special_requirements: string;

  @Column({ type: 'integer', default: 0, nullable: false })
  status: number;

  @OneToMany(() => JobOfferEntity, (jobOffer) => jobOffer.employer)
  jobOffers: JobOfferEntity[];

  @OneToOne(() => UserEntity, (user) => user.employer, {
    nullable: true,
    eager: true,
  })
  @JoinColumn({ name: 'fk_user' })
  user: UserEntity;
}
