import { ApplicationEntity } from '../entities/application.entity';

export interface IApplicationPersistence {
  persistApplication(
    application: ApplicationEntity,
  ): Promise<ApplicationEntity>;
}
