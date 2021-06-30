import { EntityRepository, Repository } from 'typeorm';
import { EmployerEntity } from '../entities/employers.entity';

@EntityRepository(EmployerEntity)
export class EmployersRepository extends Repository<EmployerEntity> {}
