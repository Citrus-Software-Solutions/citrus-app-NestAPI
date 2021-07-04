import { JobOffer } from '../domain/job-offer.model';
import { ReadJobOfferDto } from '../dtos/read-joboffert.dto';
export interface IJobOffersService {
  getAll(): Promise<ReadJobOfferDto[]>;
  getByEmployerId(id: number): Promise<ReadJobOfferDto[]>;
  updateJobOfferStatus(id: number): Promise<{ message: string }>;
  createOffer(offer: Partial<JobOffer>, employerId: number): Promise<JobOffer>;
}
