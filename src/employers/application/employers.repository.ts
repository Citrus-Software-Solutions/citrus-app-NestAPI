import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Name } from '../../shared/domain/name.vo';
import { SpecialRequirement } from '../../job-offers/domain/value-objects/special-requirement.vo';
import { EmployerDataMapper } from '../../shared/mappers/employer/employer.mapper';
import { Employer } from '../domain/employer.model';
import { DataEmployerDto } from '../dtos/data-employer.dto';
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
  async createEmployer(
    employer: DataEmployerDto,
    userId: number,
  ): Promise<Employer> {
    const realEmployer = this.dtoEmployerToReal(employer);
    const employerEntity: EmployerEntity = await this._mapper.toDalEntity(
      realEmployer,
    );

    const createdEmployer: EmployerEntity =
      await this._employersPersistence.createEmployer(employerEntity, userId);
    if (!createdEmployer) {
      throw new BadRequestException('Employer could not be created');
    }

    return this._mapper.toDomain(createdEmployer);
  }

  private dtoEmployerToReal(dtoEmployer: DataEmployerDto) {
    const realEmployer = new Employer();
    realEmployer.company_name = Name.create(dtoEmployer.company_name);
    //realEmployer.address = dtoEmployer.address;
    //realEmployer.contacts = dtoEmployer.contacts;
    //realEmployer.skills = dtoEmployer.skills;
    realEmployer.special_requirements = SpecialRequirement.create(
      dtoEmployer.special_requirements,
    );

    realEmployer.status = 0;
    return realEmployer;
  }
}
