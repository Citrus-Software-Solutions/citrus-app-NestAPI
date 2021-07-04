import { Employee } from '../domain/employee.model';

export interface IEmployeeRepository {
  getEmployee(): Promise<Employee[]>;
}
