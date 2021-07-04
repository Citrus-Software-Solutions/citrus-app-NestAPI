import { Application } from '../domain/application.model';

export interface IApplicationRepository {
  createApplication(applicationData: Application): Promise<Application>;
}
