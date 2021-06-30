import { JobOffer } from '../../job-offers/domain/job-offer.model';
import { Name } from '../../shared/domain/name.model';
import { EmployerStatus } from './employer-status.model';

export class Employer {
  private _companyName: Name;
  private _status: EmployerStatus;
  public _jobOffers: JobOffer[];

  public get companyName(): string {
    return this._companyName.value;
  }
  public set companyName(name: string) {
    this._companyName = Name.create(name);
  }

  public get status(): EmployerStatus {
    return this._status;
  }

  public set status(status: EmployerStatus) {
    this._status = status;
  }
}
