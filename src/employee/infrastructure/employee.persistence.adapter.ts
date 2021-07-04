import { Injectable, NotFoundException } from '@nestjs/common';
import { getCustomRepository } from 'typeorm';
import { IEmployeePersistence } from '../application/employee.persistence.interface';
import { EmployeeEntity } from '../entities/employee.entity';
import { EmployeeEntityRepository } from './employee.entity.repository';

@Injectable()
export class EmployeePersistenceAdapter implements IEmployeePersistence {
  async getById(employeeId: number): Promise<EmployeeEntity> {
    const employeeRepository = getCustomRepository(EmployeeEntityRepository);

    const existEmployer = employeeRepository.findOne(employeeId);

    if (!existEmployer) {
      throw new NotFoundException('This offer does not exist');
    }

    return existEmployer;
  }

  async getAll(): Promise<EmployeeEntity[]> {
    const employeeRepository = getCustomRepository(EmployeeEntityRepository);

    const employee: EmployeeEntity[] = await employeeRepository.find();
    return employee;
  }
}
