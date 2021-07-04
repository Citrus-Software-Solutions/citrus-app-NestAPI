import { Injectable } from '@nestjs/common';
import { EmployeeEntity } from '../entities/employee.entity';
import { EmployeeEntityRepository } from '../infrastructure/employee.entity.repository';
import { IEmployeeService } from './employee.service.interface';

@Injectable()
export class EmployeeService implements IEmployeeService {
  constructor(private readonly _employeeRepository: EmployeeEntityRepository) {}

  async getEmployee(): Promise<EmployeeEntity[]> {
    const employee: EmployeeEntity[] = await this._employeeRepository.find();
    return employee;
  }
}
