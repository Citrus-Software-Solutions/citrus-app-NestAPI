import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
