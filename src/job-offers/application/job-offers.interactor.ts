import { JobOffer } from '../domain/job-offer.model';

export interface JobOffersInteractor {
  getAll(): Promise<JobOffer[]>;
  getByEmployerId(id: number): Promise<JobOffer[]>;
  createOffer(offer: Partial<JobOffer>, employerId: number): Promise<JobOffer>;
}
