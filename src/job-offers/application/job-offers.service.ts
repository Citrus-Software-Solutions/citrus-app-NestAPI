import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JobOffer } from '../domain/job-offer.model';
import { IJobOffersService } from '../application/job-offers.service.interface';
import { IJobOfferRepository } from '../application/job-offers.repository.interface';
import { ReadJobOfferDto } from '../dtos/read-joboffert.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class JobOfferService implements IJobOffersService {
  constructor(
    @Inject('JobOfferRepository')
    private readonly _jobOfferRepository: IJobOfferRepository,
  ) {}

  async getAll(): Promise<ReadJobOfferDto[]> {
    const jobOffers: JobOffer[] = await this._jobOfferRepository.getAll();
    return jobOffers.map((offer: JobOffer) =>
      plainToClass(ReadJobOfferDto, offer),
    );
  }

  async getByEmployerId(employerId: number): Promise<ReadJobOfferDto[]> {
    if (!employerId) {
      throw new BadRequestException('id must be sent');
    }

    const jobOffers: JobOffer[] = await this._jobOfferRepository.getByEmployer(
      employerId,
    );

    return jobOffers.map((offer: JobOffer) =>
      plainToClass(ReadJobOfferDto, offer),
    );
  }

  async updateJobOfferStatus(jobOfferId: number): Promise<{ message: string }> {
    if (!jobOfferId) {
      throw new BadRequestException('id must be sent');
    }

    return this._jobOfferRepository.updateStatus(jobOfferId);
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
