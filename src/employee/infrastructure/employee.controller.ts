import { Controller, Get, Inject } from '@nestjs/common';
import { IEmployeeService } from '../application/employee.service.interface';
import { ReadEmployeeDto } from '../dtos/read-employee.dto';

@Controller('employees')
export class EmployeeController {
  constructor(
    @Inject('EmployeeService')
    private readonly _employeeService: IEmployeeService,
  ) {}

  @Get()
  getAllEmployee(): Promise<ReadEmployeeDto[]> {
    return this._employeeService.getEmployee();
  }
}
