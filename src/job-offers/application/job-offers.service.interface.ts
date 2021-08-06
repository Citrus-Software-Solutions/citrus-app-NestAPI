import { CreatedJobOfferDto } from '../dtos/created-job-offer.dto';
import { DataJobOfferDto } from '../dtos/data-joboffer.dto';
import { ReadJobOfferDto } from '../dtos/read-joboffert.dto';
export interface IJobOffersService {
  getAll(query: JSON): Promise<ReadJobOfferDto[]>;
  getByEmployerId(id: number): Promise<ReadJobOfferDto[]>;
  getById(jobOfferId: number): Promise<ReadJobOfferDto>;
  updateJobOfferStatus(
    id: number,
    status: number,
  ): Promise<{ message: string }>;
  createJobOffer(
    offer: DataJobOfferDto,
    employerId: number,
  ): Promise<CreatedJobOfferDto>;
  registerWorker(employeeId: number, jobOfferId: number);
}
