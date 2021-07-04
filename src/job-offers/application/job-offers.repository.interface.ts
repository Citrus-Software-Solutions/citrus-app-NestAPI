import { JobOffer } from '../domain/job-offer.model';

export interface IJobOfferRepository {
  getAll(): Promise<JobOffer[]>;
  getByEmployer(employerId: number): Promise<JobOffer[]>;
  create(offer: JobOffer, employerId: number): Promise<JobOffer>;
  updateStatus(jobOfferId: number): Promise<string>;
}
