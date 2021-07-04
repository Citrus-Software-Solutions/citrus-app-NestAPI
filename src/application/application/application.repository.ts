import { IApplicationPersistence } from './application.persistence.interface';
import { Application } from '../domain/application.model';
import { IApplicationRepository } from './application.repository.interface';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ApplicationDataMapper } from '../../shared/mappers/application/application.data-mapper';
import { ApplicationEntity } from '../entities/application.entity';

@Injectable()
export class ApplicationRepository implements IApplicationRepository {
  constructor(
    @Inject('ApplicationPersistenceAdapter')
    private readonly applicationPersistence: IApplicationPersistence,
    private readonly mapper: ApplicationDataMapper,
  ) {}

  async createApplication(applicationData: Application): Promise<Application> {
    console.log(applicationData);
    const applicationEntity: ApplicationEntity =
      this.mapper.toDalEntity(applicationData);

    const createdApplication: ApplicationEntity =
      await this.applicationPersistence.persistApplication(applicationEntity);
    if (!createdApplication) {
      throw new BadRequestException('Application could not be created');
    }
    return this.mapper.toDomain(createdApplication);
  }
}
