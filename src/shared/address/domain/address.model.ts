import { CityAddress } from './value-objects/city-address.vo';
import { StateAddress } from './value-objects/state-address.vo';
import { StreetAddress } from './value-objects/street-address.vo';
import { ZipCode } from './value-objects/zip-code.vo';

export class Address {
  constructor(
    private _street1: StreetAddress,
    private _street2: StreetAddress,
    private _city: CityAddress,
    private _state: StateAddress,
    private _zip: ZipCode,
  ) {}

  public get street1(): StreetAddress {
    return this._street1;
  }
  public set street1(value: StreetAddress) {
    this._street1 = value;
  }
  public get street2(): StreetAddress {
    return this._street2;
  }
  public set street2(value: StreetAddress) {
    this._street2 = value;
  }
  public get city(): CityAddress {
    return this._city;
  }
  public set city(value: CityAddress) {
    this._city = value;
  }
  public get state(): StateAddress {
    return this._state;
  }
  public set state(value: StateAddress) {
    this._state = value;
  }
  public get zip(): ZipCode {
    return this._zip;
  }
  public set zip(value: ZipCode) {
    this._zip = value;
  }
}
