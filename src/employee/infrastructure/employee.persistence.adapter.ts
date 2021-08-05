import { BadRequestException, Injectable } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IEmployeePersistence } from '../application/employee.persistence.interface';
import { EmployeeEntity } from '../entities/employee.entity';

@EntityRepository(EmployeeEntity)
@Injectable()
export class EmployeePersistenceAdapter
  extends Repository<EmployeeEntity>
  implements IEmployeePersistence
{
  async getEmployees(): Promise<EmployeeEntity[]> {
    const employeeRepository = getRepository(EmployeeEntity);
    const employees: EmployeeEntity[] = await employeeRepository.find();
    return employees;
  }

  async getEmployeeById(employeeId: number): Promise<EmployeeEntity> {
    if (!employeeId) {
      throw new BadRequestException('id must be sent');
    }

    const employeeRepository = getRepository(EmployeeEntity);
    const employee: EmployeeEntity = await employeeRepository.findOne(
      employeeId,
    );

    return employee;
  }
}
