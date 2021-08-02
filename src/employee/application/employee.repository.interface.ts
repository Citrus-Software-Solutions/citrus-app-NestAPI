import { Employee } from '../domain/employee.model';

export interface IEmployeeRepository {
  getEmployee(): Promise<Employee[]>;
  getEmployeeById(employeeId: number): Promise<Employee>;
}
