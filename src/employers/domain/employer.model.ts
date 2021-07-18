import { JobOffer } from '../../job-offers/domain/job-offer.model';
import { Name } from '../../shared/domain/name.vo';

export class Employer {
  public id: number;
  public name: Name;
  public jobOffers?: JobOffer[];
}
