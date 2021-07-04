import { Name } from '../../shared/domain/name.model';

export class Employee {
  constructor(
    private _id: number,
    private _name: Name,
    private _lastName: Name,
    private _secondLastName: Name,
    private _gender: string,
    private _birthDate: Date,
    private _secondName?: Name,
  ) {}
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get name(): Name {
    return this._name;
  }
  public set name(value: Name) {
    this._name = value;
  }
  public get lastName(): Name {
    return this._lastName;
  }
  public set lastName(value: Name) {
    this._lastName = value;
  }
  public get secondLastName(): Name {
    return this._secondLastName;
  }
  public set secondLastName(value: Name) {
    this._secondLastName = value;
  }
  public get gender(): string {
    return this._gender;
  }
  public set gender(value: string) {
    this._gender = value;
  }
  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this._birthDate = value;
  }
  public get secondName(): Name {
    return this._secondName;
  }
  public set secondName(value: Name) {
    this._secondName = value;
  }
}
