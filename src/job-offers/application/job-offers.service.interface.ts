import { JobOffer } from '../domain/job-offer.model';
import { JobOfferEntity } from '../entities/job-offers.entity';

export interface IJobOffersService {
  getAll(): Promise<JobOffer[]>;
  getByEmployerId(id: number): Promise<JobOffer[]>;
  getJobOfferEntityById(id: number): Promise<JobOfferEntity>;
  updateJobOfferStatus(id: number): Promise<string>;
  createOffer(offer: JobOffer, employerId: number): Promise<JobOffer>;
}
