import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EmployerEntity } from '../../employers/entities/employers.entity';
import { EmployersRepository } from '../../employers/infrastructure/employers.repository';
import { JobOffer } from '../domain/job-offer.model';
import { JobOfferEntity } from '../entities/job-offers.entity';
import { JobOffersRepository } from '../infrastructure/job-offers.repository';
import { JobOffersInteractor } from './job-offers.interactor';

@Injectable()
export class JobOfferService implements JobOffersInteractor {
  //private jobOffers: JobOffer[] = [];

  constructor(
    private readonly _jobOffersRepository: JobOffersRepository,
    private readonly _employerRepository: EmployersRepository,
  ) { }

  async getAll(): Promise<JobOffer[]> {
    const jobOffers: JobOfferEntity[] = await this._jobOffersRepository.find();
    return jobOffers;
  }

  async getByEmployerId(employerId: number): Promise<JobOffer[]> {
    if (!employerId) {
      throw new BadRequestException('id must be sent');
    }

    const employerExist: EmployerEntity =
      await this._employerRepository.findOne(employerId);

    if (!employerExist) {
      throw new NotFoundException();
    }

    const jobOffers: JobOfferEntity[] = await this._jobOffersRepository.find({
      relations: ['employer'],
      where: { employer: employerExist },
    });

    if (!jobOffers) {
      throw new NotFoundException(
        'This employer does not have job offers created',
      );
    }

    return jobOffers;
  }
  async getJobOfferEntityById(jobOfferId: number): Promise<JobOfferEntity> {
    if (!jobOfferId) {
      throw new BadRequestException('id must be sent');
    }
    const jobOffer: JobOfferEntity = await this._jobOffersRepository.findOne(jobOfferId);

    return jobOffer;
  }
  async updateJobOfferStatus(jobOfferId: number): Promise<JobOffer> {
    if (!jobOfferId) {
      throw new BadRequestException('id must be sent');
    }
    const jobOffer: JobOfferEntity = await this.getJobOfferEntityById(jobOfferId);

    return jobOffer;
  }
}
