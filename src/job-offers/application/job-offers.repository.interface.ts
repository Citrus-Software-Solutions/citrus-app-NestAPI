import { JobOffer } from '../domain/job-offer.model';
import { DataJobOfferDto } from '../dtos/data-joboffer.dto';

export interface IJobOfferRepository {
  getAll(query: JSON): Promise<JobOffer[]>;
  getByEmployer(employerId: number): Promise<JobOffer[]>;
  getById(jobOfferId: number): Promise<JobOffer>;
  create(offer: DataJobOfferDto, employerId: number): Promise<JobOffer>;
  updateStatus(
    jobOfferId: number,
    jobOfferStatus: number,
  ): Promise<{ message: string }>;
}
