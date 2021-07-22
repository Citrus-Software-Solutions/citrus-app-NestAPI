import { Address } from '../../shared/address/domain/address.model';
import { JobOffer } from '../../job-offers/domain/job-offer.model';
import { Name } from '../../shared/domain/name.vo';
import { SpecialRequirement } from '../../job-offers/domain/value-objects/special-requirement.vo';
import { ID } from '../../shared/domain/id.vo';
import { ContactInformation } from '../../contact-information/domain/contact-information.model';

export class Employer {
  public id: ID;
  public company_name: Name;
  public address: Address;
  public contacts: ContactInformation[];
  //public logo: Logo;
  //public skills: Skill[];
  public special_requirements: SpecialRequirement;
  public status: number;
  public jobOffers?: JobOffer[];
}
