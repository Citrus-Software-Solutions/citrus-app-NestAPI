import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Address } from '../../shared/address/domain/address.model';
import { Name } from '../../shared/domain/name.vo';
import { AddressDataMapper } from '../../shared/mappers/address/address.data-mapper';
import { Employee } from '../domain/employee.model';
import { CreatedEmployeeDto } from '../dtos/created-employee.dto';
import { DataEmployeeDto } from '../dtos/data-employee.dto';
import { ReadEmployeeDto } from '../dtos/read-employee.dto';
import { IEmployeeRepository } from './employee.repository.interface';
import { IEmployeeService } from './employee.service.interface';

@Injectable()
export class EmployeeService implements IEmployeeService {
  constructor(
    @Inject('EmployeeRepository')
    private readonly _employeeRepository: IEmployeeRepository,
    private readonly _mapperAddress: AddressDataMapper,
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

  async createEmployee(
    employeeDto: Partial<DataEmployeeDto>,
    userId: number,
  ): Promise<CreatedEmployeeDto> {
    if (!employeeDto) {
      throw new BadRequestException('employee data must be sent');
    }

    if (!userId) {
      throw new BadRequestException('user id must be sent');
    }

    const employee: Employee = new Employee();

    const address: Address = this._mapperAddress.toDomainFromReadDto(
      employeeDto.address,
    );

    employee.first_name = Name.create(employeeDto.first_name.toString());
    employee.middle_name = Name.create(employeeDto.middle_name.toString());
    employee.last_name = Name.create(employeeDto.last_name.toString());
    employee.phone_number = employeeDto.phone_number;
    employee.birth_date = employeeDto.birth_date;
    employee.address = address;
    employee.ssn = employeeDto.ssn;
    employee.education_level = employeeDto.education_level;

    const savedEmployee: Employee =
      await this._employeeRepository.createEmployee(employee, userId);

    return plainToClass(CreatedEmployeeDto, savedEmployee);
  }
}
