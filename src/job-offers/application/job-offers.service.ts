import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JobOffer } from '../domain/job-offer.model';
import { IJobOffersService } from './job-offers.service.interface';
import { IJobOfferRepository } from './job-offers.repository.interface';
import { EmployersRepository } from 'src/employers/application/employers.repository';
import { JobOfferEntity } from '../entities/job-offers.entity';

@Injectable()
export class JobOfferService implements IJobOffersService {
  constructor(
    @Inject('JobOfferRepository')
    private readonly _jobOfferRepository: IJobOfferRepository,
    private readonly _employerRepository: EmployersRepository,
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
  // TODO: Make refactor to mapping and hexagonal architecture
  async getJobOfferEntityById(jobOfferId: number): Promise<JobOfferEntity> {
    if (!jobOfferId) {
      throw new BadRequestException('id must be sent');
    }
    const jobOffer: JobOfferEntity = await this._jobOfferRepository.findOne(
      jobOfferId,
    );

    return jobOffer;
  }
  // TODO: Make refactor to mapping and hexagonal architecture
  async updateJobOfferStatus(jobOfferId: number): Promise<string> {
    if (!jobOfferId) {
      throw new BadRequestException('id must be sent');
    }
    const jobOffer: JobOfferEntity = await this.getJobOfferEntityById(
      jobOfferId,
    );
    let message: string;
    if (jobOffer.status == 'Hidden') {
      await this._jobOfferRepository.update(jobOfferId, {
        status: 'Published',
      });
      message = 'Status changed successfully';
    } else if (jobOffer.status == 'Published') {
      await this._jobOfferRepository.update(jobOfferId, {
        status: 'Hidden',
      });
      message = 'Status changed successfully';
    } else {
      message =
        'The value of the status attribute is invalid, it must be "Hidden" or "Published"';
    }

    return message;
  }
}
