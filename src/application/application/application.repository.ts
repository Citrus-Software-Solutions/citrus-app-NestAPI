import { IApplicationPersistence } from './application.persistence.interface';
import { Application } from '../domain/application.model';
import { IApplicationRepository } from './application.repository.interface';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ApplicationDataMapper } from '../../shared/mappers/application/application.data-mapper';
import { ApplicationEntity } from '../entities/application.entity';
import { IJobOffersPersistence } from '../../job-offers/application/job-offers.persistence.interface';
import { JobOfferEntity } from '../../job-offers/entities/job-offers.entity';
import { IEmployeePersistence } from '../../employee/application/employee.persistence.interface';
import { EmployeeEntity } from '../../employee/entities/employee.entity';

@Injectable()
export class ApplicationRepository implements IApplicationRepository {
  constructor(
    @Inject('ApplicationPersistenceAdapter')
    private readonly applicationPersistence: IApplicationPersistence,
    private readonly mapper: ApplicationDataMapper,
    @Inject('JobOfferPersistenceAdapter')
    private readonly _jobOfferPersistence: IJobOffersPersistence,
    @Inject('EmployeePersistenceAdapter')
    private readonly employeePersistence: IEmployeePersistence,
  ) {}

  async createApplication(
    employeeId: number,
    offerId: number,
    fecha: Date,
  ): Promise<Application> {
    const offer: JobOfferEntity = await this._jobOfferPersistence.getById(
      offerId,
    );
    const employee: EmployeeEntity = await this.employeePersistence.getById(
      employeeId,
    );
    const applied: boolean = await this.applicationPersistence.alreadyApplied(
      employee,
      offer,
    );

    if (applied) {
      throw new BadRequestException('You already have applied to this offer');
    } else {
      const applicationEntity: ApplicationEntity = new ApplicationEntity();
      applicationEntity.date_aplication = fecha;
      applicationEntity.employee = employee;
      applicationEntity.jobOffer = offer;

      const createdApplication: ApplicationEntity =
        await this.applicationPersistence.persistApplication(applicationEntity);

      if (!createdApplication) {
        throw new BadRequestException('Application could not be created');
      }
      return this.mapper.toDomain(createdApplication);
    }
  }
}
