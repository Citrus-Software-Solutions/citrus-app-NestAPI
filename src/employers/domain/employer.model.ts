import { User } from '../../user/domain/user.model';
import { JobOffer } from '../../job-offers/domain/job-offer.model';
import { Name } from '../../shared/domain/name.model';

export class Employer {
  public id: number;
  public name: Name;
  public jobOffers?: JobOffer[];
  public user: User;
}
