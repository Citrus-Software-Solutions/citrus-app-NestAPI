import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Employee } from '../domain/employee.model';
import { ReadEmployeeDto } from '../dtos/read-employee.dto';
import { IEmployeeRepository } from './employee.repository.interface';
import { IEmployeeService } from './employee.service.interface';

@Injectable()
export class EmployeeService implements IEmployeeService {
  constructor(
    @Inject('EmployeeRepository')
    private readonly _employeeRepository: IEmployeeRepository,
  ) {}

  async getEmployee(): Promise<ReadEmployeeDto[]> {
    const employee: Employee[] = await this._employeeRepository.getEmployee();
    return employee.map((emp: Employee) => plainToClass(ReadEmployeeDto, emp));
  }

  async getEmployeeById(employeeId: number): Promise<ReadEmployeeDto> {
    if (!employeeId) {
      throw new BadRequestException('id must be sent');
    }

    return plainToClass(
      ReadEmployeeDto,
      this._employeeRepository.getEmployeeById(employeeId),
    );
  }
}
