import { JobOffer } from '../domain/job-offer.model';

export interface JobOffersInteractor {
  getAll(): Promise<JobOffer[]>;
}
