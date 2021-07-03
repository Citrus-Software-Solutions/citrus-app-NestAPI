import { JobOffer } from '../domain/job-offer.model';

export interface IJobOffersService {
  getAll(): Promise<JobOffer[]>;
  getByEmployerId(id: number): Promise<JobOffer[]>;
  createOffer(offer: JobOffer, employerId: number): Promise<JobOffer>;
}
