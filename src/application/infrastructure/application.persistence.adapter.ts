import { getCustomRepository } from 'typeorm';
import { IApplicationPersistence } from '../application/application.persistence.interface';
import { ApplicationEntity } from '../entities/application.entity';
import { ApplicationEntityRepository } from './application.entity.repository';
import { Injectable } from '@nestjs/common';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { JobOfferEntity } from 'src/job-offers/entities/job-offers.entity';

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

  async alreadyApplied(
    employee: EmployeeEntity,
    offer: JobOfferEntity,
  ): Promise<boolean> {
    const applicationRepository = getCustomRepository(
      ApplicationEntityRepository,
    );

    const applied: ApplicationEntity = await applicationRepository.findOne({
      where: { employee: employee, jobOffer: offer },
    });
    if (applied) {
      return true;
    } else {
      return false;
    }
  }
}
