import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { JobOfferEntity } from 'src/job-offers/entities/job-offers.entity';
import { ApplicationEntity } from '../entities/application.entity';

export interface IApplicationPersistence {
  persistApplication(
    application: ApplicationEntity,
  ): Promise<ApplicationEntity>;
  alreadyApplied(
    employee: EmployeeEntity,
    offer: JobOfferEntity,
  ): Promise<boolean>;
}
