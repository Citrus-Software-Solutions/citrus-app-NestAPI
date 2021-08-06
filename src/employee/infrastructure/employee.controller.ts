import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IEmployeeService } from '../application/employee.service.interface';
import { CreatedEmployeeDto } from '../dtos/created-employee.dto';
import { DataEmployeeDto } from '../dtos/data-employee.dto';
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

  @Post('/:userId')
  @ApiOperation({ summary: 'Create an employee' })
  createEmployer(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() employee: Partial<DataEmployeeDto>,
  ): Promise<CreatedEmployeeDto> {
    return this._employeeService.createEmployee(employee, userId);
  }
}
