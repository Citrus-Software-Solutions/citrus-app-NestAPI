import { Controller, Get, Inject } from '@nestjs/common';
import { IEmployeeService } from '../application/employee.service.interface';
import { EmployeeEntity } from '../entities/employee.entity';

@Controller('employees')
export class EmployeeController {
  constructor(
    @Inject('EmployeeService')
    private readonly _employeeService: IEmployeeService,
  ) {}

  @Get('')
  getAllEmployee(): Promise<EmployeeEntity[]> {
    return this._employeeService.getEmployee();
  }
}
