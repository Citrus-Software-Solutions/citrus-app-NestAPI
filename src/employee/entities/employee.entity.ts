import { AddressEntity } from '../../shared/address/entities/address.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SkillEntity } from '../../shared/skill/entities/skill.entity';
import { WorkExperienceEntity } from '../../work-experience/entities/work-experience.entity';
import { ReferenceEntity } from '../../reference/entities/reference.entity';

@Entity('employee')
export class EmployeeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  middle_name: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  last_name: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  phone_number: string;

  @Column({ type: 'date', nullable: false })
  birth_date: Date;

  @OneToOne(() => AddressEntity, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn()
  address: AddressEntity;

  @Column({ type: 'varchar', length: 30, nullable: false })
  ssn: string;

  @Column({ type: 'integer', nullable: false })
  education_level: number;

  @OneToMany(
    () => WorkExperienceEntity,
    (workExperience) => workExperience.employee,
    {
      eager: true,
    },
  )
  work_experiences: WorkExperienceEntity[];

  @ManyToMany((type) => SkillEntity, (skill) => skill.employee, {
    eager: true,
  })
  @JoinColumn()
  skills: SkillEntity[];

  @OneToMany(() => ReferenceEntity, (reference) => reference.employee, {
    eager: true,
  })
  references: ReferenceEntity[];

  @Column({ type: 'float', nullable: false })
  rating: number;

  @Column({ type: 'integer', nullable: false })
  status: number;

  // @OneToMany(() => ApplicationEntity, (application) => application.employee)
  // applications: ApplicationEntity[];
}
