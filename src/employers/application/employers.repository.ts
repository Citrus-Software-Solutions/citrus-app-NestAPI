import { Inject, Injectable } from '@nestjs/common';
import { EmployerDataMapper } from '../../shared/mappers/employer/employer.mapper';
import { Employer } from '../domain/employer.model';
import { UpdateEmployerDto } from '../dtos/update-employer.dto';
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

  async getEmployers(): Promise<Employer[]> {
    const employersEntity = await this._employersPersistence.getEmployers();
    return employersEntity.map((employer: EmployerEntity) =>
      this._mapper.toDomain(employer),
    );
  }

  async getEmployerById(employerId: number): Promise<Employer> {
    const employerEntity = await this._employersPersistence.getEmployerById(
      employerId,
    );

    return this._mapper.toDomain(employerEntity);
  }

  async getEmployerByUserId(userId: number): Promise<Employer> {
    const employerEntity = await this._employersPersistence.getEmployerByUserId(
      userId,
    );

    return this._mapper.toDomain(employerEntity);
  }

  async updateEmployer(
    employerId: number,
    employer: Employer,
  ): Promise<Employer> {
    const employerUpdated: EmployerEntity =
      await this._employersPersistence.updateEmployer(
        employerId,
        this._mapper.toDalEntity(employer),
      );

    return this._mapper.toDomain(employerUpdated);
  }

  async createEmployer(employer: Employer, userId: number): Promise<Employer> {
    const createdEmployer: EmployerEntity =
      await this._employersPersistence.createEmployer(
        this._mapper.toDalEntity(employer),
        userId,
      );

    return this._mapper.toDomain(createdEmployer);
  }
}
