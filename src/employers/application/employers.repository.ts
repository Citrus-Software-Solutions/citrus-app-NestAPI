import { Inject, Injectable } from '@nestjs/common';
import { EmployerDataMapper } from '../../shared/mappers/employer/employer.mapper';
import { Employer } from '../domain/employer.model';
import { EmployerEntity } from '../entities/employers.entity';
import { IEmployersPersistence } from './employers.persistence.interface';
import { IEmployerRepository } from './employers.repository.interface';

@Injectable()
export class EmployersRepository implements IEmployerRepository {
  constructor(
    @Inject('EmployersPersisteceAdapter')
    private readonly _employersPersistence: IEmployersPersistence,
    private readonly _mapper: EmployerDataMapper,
  ) {}

  async findEmployers(): Promise<Employer[]> {
    const employersEntity = await this._employersPersistence.getEmployers();
    return employersEntity.map((employer: EmployerEntity) =>
      this._mapper.toDomain(employer),
    );
  }

  async findEmployerById(): Promise<Employer[]> {
    // TODO: Implement find employer by id number
    return null;
  }
}
