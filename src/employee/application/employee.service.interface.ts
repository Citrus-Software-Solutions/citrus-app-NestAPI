import { ReadEmployeeDto } from '../dtos/read-employee.dto';

export interface IEmployeeService {
  getEmployee(): Promise<ReadEmployeeDto[]>;
  getEmployeeById(employeeId: number): Promise<ReadEmployeeDto>;
}
