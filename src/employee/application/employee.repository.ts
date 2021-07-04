import { Inject, Injectable } from '@nestjs/common';
import { EmployeeDataMapper } from '../../shared/mappers/employee/employee.data-mapper';
import { Employee } from '../domain/employee.model';
import { EmployeeEntity } from '../entities/employee.entity';
import { IEmployeePersistence } from './employee.persistence.interface';
import { IEmployeeRepository } from './employee.repository.interface';

@Injectable()
export class EmployeeRepository implements IEmployeeRepository {
  constructor(
    @Inject('EmployeePersistenceAdapter')
    private readonly _employeePersistence: IEmployeePersistence,
    private readonly _mapper: EmployeeDataMapper,
  ) {}

  async getEmployee(): Promise<Employee[]> {
    const employersEntity = await this._employeePersistence.getAll();
    return employersEntity.map((employer: EmployeeEntity) =>
      this._mapper.toDomain(employer),
    );
  }
}
