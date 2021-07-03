import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JobOffer } from '../domain/job-offer.model';
import { IJobOffersService } from './job-offers.service.interface';
import { IJobOfferRepository } from './job-offers.repository.interface';

@Injectable()
export class JobOfferService implements IJobOffersService {
  constructor(
    @Inject('JobOfferRepository')
    private readonly _jobOfferRepository: IJobOfferRepository,
  ) {}

  async getAll(): Promise<JobOffer[]> {
    const jobOffers: JobOffer[] = await this._jobOfferRepository.getAll();

    return jobOffers;
  }

  async getByEmployerId(employerId: number): Promise<JobOffer[]> {
    if (!employerId) {
      throw new BadRequestException('id must be sent');
    }

    const jobOffers: JobOffer[] = await this._jobOfferRepository.getByEmployer(
      employerId,
    );

    return jobOffers;
  }

  async createOffer(offer: JobOffer, employerId: number): Promise<JobOffer> {
    if (!offer) {
      throw new BadRequestException('Offer can not be empty');
    }
    if (!employerId) {
      throw new NotFoundException('Id can not be empty');
    }

    const savedOffer: JobOffer = await this._jobOfferRepository.create(
      offer,
      employerId,
    );

    return savedOffer;
  }
}
