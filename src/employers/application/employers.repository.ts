import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { EmployerDataMapper } from '../../shared/mappers/employer/employer.mapper';
import { Employer } from '../domain/employer.model';
import { CreateEmployerDto } from '../dtos/create-employer.dto';
import { ReadEmployerDto } from '../dtos/read-employer.dto';
import { EmployerEntity } from '../entities/employers.entity';
import { IEmployersPersistence } from './employers.persistence.interface';
import { IEmployerRepository } from './employers.repository.interface';

@Injectable()
export class EmployersRepository implements IEmployerRepository {
  constructor(
    @Inject('EmployersPersisteceAdapter')
    private readonly _employerPersistence: IEmployersPersistence,
    private readonly _employerMapper: EmployerDataMapper,
  ) {}

  async findEmployers(): Promise<Employer[]> {
    const employersEntity = await this._employerPersistence.getEmployers();
    return employersEntity.map((employer: EmployerEntity) =>
      this._employerMapper.toDomain(employer),
    );
  }

  async findEmployerById(employerId: number): Promise<Employer> {
    const employerEntity = await this._employerPersistence.getEmployerById(
      employerId,
    );
    return this._employerMapper.toDomain(employerEntity);
  }

  async createEmployer(employer: CreateEmployerDto): Promise<ReadEmployerDto> {
    const savedEmployer: ReadEmployerDto =
      await this._employerPersistence.saveEmployer(employer);

    if (!savedEmployer) {
      throw new InternalServerErrorException('Employer could not be saved');
    }

    return savedEmployer;
  }
}
