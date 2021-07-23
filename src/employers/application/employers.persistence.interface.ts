import { CreateEmployerDto } from '../dtos/create-employer.dto';
import { ReadEmployerDto } from '../dtos/read-employer.dto';
import { EmployerEntity } from '../entities/employers.entity';

export interface IEmployersPersistence {
  getEmployers(): Promise<EmployerEntity[]>;
  getEmployerById(employerId: number): Promise<EmployerEntity>;
  saveEmployer(employer: CreateEmployerDto): Promise<ReadEmployerDto>;
}
