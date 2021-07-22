import { Address } from '../../shared/address/domain/address.model';
import { Name } from '../../shared/domain/name.vo';
import { SpecialRequirement } from '../../shared/domain/special-requirement.vo';
import { Skill } from '../../shared/skill/domain/skill.model';
import { ContactInformation } from './contact-information.model';
import { EmployerStatusEnum } from './employer-status.enum';

export class Employer {
  constructor(
    private _companyName: Name,
    private _address: Address,
    private _contacts: ContactInformation[],
    private _logo: string,
    private _skills: Skill[],
    private _specialRequirements: SpecialRequirement[],
    private _status: EmployerStatusEnum,
  ) {}

  public get companyName(): Name {
    return this._companyName;
  }
  public set companyName(value: Name) {
    this._companyName = value;
  }
  public get address(): Address {
    return this._address;
  }
  public set address(value: Address) {
    this._address = value;
  }
  public get contacts(): ContactInformation[] {
    return this._contacts;
  }
  public set contacts(value: ContactInformation[]) {
    this._contacts = value;
  }
  public get logo(): string {
    return this._logo;
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public get skills(): Skill[] {
    return this._skills;
  }
  public set skills(value: Skill[]) {
    this._skills = value;
  }
  public get specialRequirements(): SpecialRequirement[] {
    return this._specialRequirements;
  }
  public set specialRequirements(value: SpecialRequirement[]) {
    this._specialRequirements = value;
  }
  public get status(): EmployerStatusEnum {
    return this._status;
  }
  public set status(value: EmployerStatusEnum) {
    this._status = value;
  }
}
