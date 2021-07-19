import { Skill } from '../../shared/skill/domain/skill.model';
import { Address } from '../../shared/address/domain/address.model';
import { Name } from '../../shared/domain/name.model';
import { ContactInformation } from './contact-information.model';

export class Employer {
  constructor(
    private _companyName: Name,
    private address: Address,
    private contacts: ContactInformation[],
    private _logo: string,
    private skills: Skill[],
    private _specialRequirements: string,
  ) {}
}
