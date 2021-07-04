import { Application } from '../domain/application.model';

export interface IApplicationService {
  applyToOffer(application: Application): Promise<Application>;
}
