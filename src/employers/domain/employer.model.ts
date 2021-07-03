import { JobOffer } from '../../job-offers/domain/job-offer.model';
import { Name } from '../../shared/domain/name.model';
import { EmployerStatus } from './employer-status.model';

export class Employer {
  public id: number;
  public name: Name;
  //private _status: EmployerStatus;
  public jobOffers?: JobOffer[];

  // public get name(): string {
  //   return this._name.value;
  // }
  // public set name(name: string) {
  //   this._name = Name.create(name);
  // }

  // public get status(): EmployerStatus {
  //   return this._status;
  // }

  // public set status(status: EmployerStatus) {
  //   this._status = status;
  // }
}
