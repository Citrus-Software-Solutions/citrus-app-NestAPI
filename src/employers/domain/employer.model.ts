import { Name } from 'src/shared/domain/name.model';
import { EmployerStatus } from './employer-status.model';

export class Employer {
  constructor(private _companyName: Name, private _status: EmployerStatus) {}
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
