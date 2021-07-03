import { JobOfferEntity } from '../entities/job-offers.entity';

export interface IJobOffersPersistence {
  getJobOffers(): Promise<JobOfferEntity[]>;
  getByEmployerId(employerId: number): Promise<JobOfferEntity[]>;
  createJobOffer(
    offer: JobOfferEntity,
    employerId: number,
  ): Promise<JobOfferEntity>;
}