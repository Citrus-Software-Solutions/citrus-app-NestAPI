import { EntityRepository, Repository } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';

@EntityRepository(EmployeeEntity)
export class EmployeeEntityRepository extends Repository<EmployeeEntity> {}
