import { EmployerEntity } from '../entities/employers.entity';

export interface IEmployersPersistence {
  getEmployers(): Promise<EmployerEntity[]>;
  getEmployerById(employerId: number): Promise<EmployerEntity>;
}
