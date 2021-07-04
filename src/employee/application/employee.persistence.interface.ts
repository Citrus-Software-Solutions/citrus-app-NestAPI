import { EmployeeEntity } from '../entities/employee.entity';

export interface IEmployeePersistence {
  getById(offerId: number): Promise<EmployeeEntity>;
  getAll(): Promise<EmployeeEntity[]>;
}
