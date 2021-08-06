import { JobOffer } from '../domain/job-offer.model';

export interface IJobOfferRepository {
  getAll(query: JSON): Promise<JobOffer[]>;
  getByEmployer(employerId: number): Promise<JobOffer[]>;
  getById(jobOfferId: number): Promise<JobOffer>;
  createJobOffer(offer: JobOffer, employerId: number): Promise<JobOffer>;
  updateStatus(
    jobOfferId: number,
    jobOfferStatus: number,
  ): Promise<{ message: string }>;
}
