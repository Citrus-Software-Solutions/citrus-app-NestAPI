import { Controller, Get, Inject } from '@nestjs/common';
import { IEmployeeService } from '../application/employee.service.interface';
import { Employee } from '../domain/employee.model';

@Controller('employees')
export class EmployeeController {
  constructor(
    @Inject('EmployeeService')
    private readonly _employeeService: IEmployeeService,
  ) {}

  @Get('')
  getAllEmployee(): Promise<Employee[]> {
    return this._employeeService.getEmployee();
  }
}
