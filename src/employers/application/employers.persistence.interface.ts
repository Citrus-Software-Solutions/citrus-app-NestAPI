import { EmployerEntity } from '../entities/employers.entity';

export interface IEmployersPersistence {
  getEmployers(): Promise<EmployerEntity[]>;
  getEmployerById(employerId: number): Promise<EmployerEntity>;
  getEmployerByUserId(userId: number): Promise<EmployerEntity>;
  updateEmployer(
    employerId: number,
    employer: EmployerEntity,
  ): Promise<EmployerEntity>;
  createEmployer(
    employer: EmployerEntity,
    userId: number,
  ): Promise<EmployerEntity>;
}
