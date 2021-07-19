import { EmailAddress } from './value-objects/email-address.vo';
import { FullName } from './value-objects/full-name.vo';
import { JobTitle } from './value-objects/job-title.vo';
import { PhoneNumber } from './value-objects/phone-number.vo';

export class ContactInformation {
  constructor(
    private _fullName: FullName,
    private _jobTitle: JobTitle,
    private _phone: PhoneNumber,
    private _email: EmailAddress,
  ) {}

  public get fullName(): FullName {
    return this._fullName;
  }
  public set fullName(value: FullName) {
    this._fullName = value;
  }
  public get jobTitle(): JobTitle {
    return this._jobTitle;
  }
  public set jobTitle(value: JobTitle) {
    this._jobTitle = value;
  }
  public get phone(): PhoneNumber {
    return this._phone;
  }
  public set phone(value: PhoneNumber) {
    this._phone = value;
  }
  public get email(): EmailAddress {
    return this._email;
  }
  public set email(value: EmailAddress) {
    this._email = value;
  }
}
