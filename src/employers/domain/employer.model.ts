import { EmployerStatus } from './employer-status.model';

export class Employer {
  constructor(private _companyName: string, private _status: EmployerStatus) {}
  public get companyName(): string {
    return this._companyName;
  }
  public set companyName(companyName: string) {
    this._companyName = companyName;
  }

  public get status(): EmployerStatus {
    return this._status;
  }

  public set status(status: EmployerStatus) {
    this._status = status;
  }
}
