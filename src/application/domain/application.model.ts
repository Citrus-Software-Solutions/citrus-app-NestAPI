import { JobOffer } from '../../job-offers/domain/job-offer.model';
import { Employee } from '../../employee/domain/employee.model';

export class Application {
  constructor(
    private _id: number,
    private _status: string,
    private _dateApplication: Date,
    private _employee: Employee,
    private _jobOffer: JobOffer,
  ) {}

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get status(): string {
    return this._status;
  }
  public set status(value: string) {
    this._status = value;
  }
  public get dateApplication(): Date {
    return this._dateApplication;
  }
  public set dateApplication(value: Date) {
    this._dateApplication = value;
  }
  public get employee(): Employee {
    return this._employee;
  }
  public set employee(value: Employee) {
    this._employee = value;
  }
  public get jobOffer(): JobOffer {
    return this._jobOffer;
  }
  public set jobOffer(value: JobOffer) {
    this._jobOffer = value;
  }
}
