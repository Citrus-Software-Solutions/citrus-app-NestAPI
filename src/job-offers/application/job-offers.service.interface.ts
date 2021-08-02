import { JobOffer } from '../domain/job-offer.model';
import { DataJobOfferDto } from '../dtos/data-joboffer.dto';
import { ReadJobOfferDto } from '../dtos/read-joboffert.dto';
export interface IJobOffersService {
  getAll(query: JSON): Promise<ReadJobOfferDto[]>;
  getByEmployerId(id: number): Promise<ReadJobOfferDto[]>;
  getById(jobOfferId: number): Promise<ReadJobOfferDto>;
  updateJobOfferStatus(id: number): Promise<{ message: string }>;
  createOffer(offer: DataJobOfferDto, employerId: number): Promise<JobOffer>;
}
