import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('staff_member')
export class StaffMemberEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  middle_name: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  last_name: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  title: string;
}
