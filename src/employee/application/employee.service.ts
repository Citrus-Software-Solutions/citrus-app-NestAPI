import { Inject, Injectable } from '@nestjs/common';
import { Employee } from '../domain/employee.model';
import { IEmployeeRepository } from './employee.repository.interface';
import { IEmployeeService } from './employee.service.interface';

@Injectable()
export class EmployeeService implements IEmployeeService {
  constructor(
    @Inject('EmployeeRepository')
    private readonly _employeeRepository: IEmployeeRepository,
  ) {}

  async getEmployee(): Promise<Employee[]> {
    const employee: Employee[] = await this._employeeRepository.getEmployee();
    return employee;
  }
}
