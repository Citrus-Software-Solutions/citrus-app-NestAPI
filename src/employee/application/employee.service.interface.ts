import { CreatedEmployeeDto } from '../dtos/created-employee.dto';
import { DataEmployeeDto } from '../dtos/data-employee.dto';
import { ReadEmployeeDto } from '../dtos/read-employee.dto';

export interface IEmployeeService {
  getEmployee(): Promise<ReadEmployeeDto[]>;
  getEmployeeById(employeeId: number): Promise<ReadEmployeeDto>;
  createEmployee(
    employee: Partial<DataEmployeeDto>,
    userId: number,
  ): Promise<CreatedEmployeeDto>;
}
