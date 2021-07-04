import { getCustomRepository } from 'typeorm';
import { IApplicationPersistence } from '../application/application.persistence.interface';
import { ApplicationEntity } from '../entities/application.entity';
import { ApplicationEntityRepository } from './application.entity.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplicationPersistenceAdapter implements IApplicationPersistence {
  async persistApplication(
    application: ApplicationEntity,
  ): Promise<ApplicationEntity> {
    const applicationRepository = getCustomRepository(
      ApplicationEntityRepository,
    );
    let createdApplication = applicationRepository.create();
    createdApplication = application;

    const savedApplication: ApplicationEntity =
      await applicationRepository.save(createdApplication);

    return savedApplication;
  }
}
