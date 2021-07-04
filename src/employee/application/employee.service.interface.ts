import { Employee } from '../domain/employee.model';

export interface IEmployeeService {
  getEmployee(): Promise<Employee[]>;
}
