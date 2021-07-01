import { JobOffer } from '../../job-offers/domain/job-offer.model';
import { Name } from '../../shared/domain/name.model';
import { EmployerStatus } from './employer-status.model';

export class Employer {
  public id: number;
  private name: Name;
  //private _status: EmployerStatus;
  public jobOffers: JobOffer[];

  public get companyName(): string {
    return this.name.value;
  }
  public set companyName(name: string) {
    this.name = Name.create(name);
  }

  // public get status(): EmployerStatus {
  //   return this._status;
  // }

  // public set status(status: EmployerStatus) {
  //   this._status = status;
  // }
}
