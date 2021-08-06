import { JobOfferEntity } from '../entities/job-offers.entity';

export interface IJobOffersPersistence {
  getJobOffers(query: JSON): Promise<JobOfferEntity[]>;
  getByEmployerId(employerId: number): Promise<JobOfferEntity[]>;
  createJobOffer(
    offer: JobOfferEntity,
    employerId: number,
  ): Promise<JobOfferEntity>;
  getById(offerId: number): Promise<JobOfferEntity>;
  updateJobOfferStatus(
    jobOfferId: number,
    jobOfferStatus: number,
  ): Promise<{ message: string }>;
  setEmployeeToJobOffer(
    employerId: number,
    jobOfferId: number,
  ): Promise<boolean>;
  updateJobOffer(
    jobOfferId: number,
    jobOffer: JobOfferEntity,
  ): Promise<JobOfferEntity>;
}
