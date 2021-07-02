import { JobOffer } from '../domain/job-offer.model';
import { JobOfferEntity } from '../entities/job-offers.entity';

export interface JobOffersInteractor {
  getAll(): Promise<JobOffer[]>;
  getByEmployerId(id: number): Promise<JobOffer[]>;
  getJobOfferEntityById(id: number): Promise<JobOfferEntity>;
  updateJobOfferStatus(id: number): Promise<JobOffer>;
}
