import { Application } from '../domain/application.model';

export interface IApplicationRepository {
  createApplication(
    employeeId: number,
    offerId: number,
    fecha: Date,
  ): Promise<Application>;
  appliedToAOffer(employeeId: number, offerId: number): Promise<boolean>;
}
