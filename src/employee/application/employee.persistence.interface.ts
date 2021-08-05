import { EmployeeEntity } from '../entities/employee.entity';

export interface IEmployeePersistence {
  getEmployees(): Promise<EmployeeEntity[]>;
  getEmployeeById(employeeId: number): Promise<EmployeeEntity>;
  createEmployee(
    employee: EmployeeEntity,
    userId: number,
  ): Promise<EmployeeEntity>;
}
