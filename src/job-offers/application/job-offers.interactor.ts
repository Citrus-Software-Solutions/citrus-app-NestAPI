import { JobOffer } from '../domain/job-offer.model';

export interface JobOffersInteractor {
  getAll(): Promise<JobOffer[]>;
  getByEmployerId(id: number): Promise<JobOffer[]>;
}
