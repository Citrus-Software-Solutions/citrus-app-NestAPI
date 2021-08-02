import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IEmployeeService } from '../application/employee.service.interface';
import { ReadEmployeeDto } from '../dtos/read-employee.dto';

@ApiTags('employees')
@Controller('employees')
export class EmployeeController {
  constructor(
    @Inject('EmployeeService')
    private readonly _employeeService: IEmployeeService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all employees' })
  getAllEmployee(): Promise<ReadEmployeeDto[]> {
    return this._employeeService.getEmployee();
  }

  @Get('/:employeeId')
  @ApiOperation({ summary: 'Get employee data by its id' })
  getById(
    @Param('employeeId', ParseIntPipe) employeeId: number,
  ): Promise<ReadEmployeeDto> {
    return this._employeeService.getEmployeeById(employeeId);
  }
}
