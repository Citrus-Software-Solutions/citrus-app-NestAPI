import { EmployeeEntity } from '../entities/employee.entity';

export interface IEmployeeService {
  getEmployee(): Promise<EmployeeEntity[]>;
}
