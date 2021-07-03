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
  ) {}

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

  async createOffer(
    offer: Partial<JobOffer>,
    employerId: number,
  ): Promise<JobOffer> {
    if (!offer) {
      throw new BadRequestException('Offer can not be empty');
    }

    const employer: EmployerEntity = await this._employerRepository.findOne(
      employerId,
    );

    if (!employer) {
      throw new NotFoundException('Does not exist a employer with id sent');
    }

    const savedOffer: JobOfferEntity = await this._jobOffersRepository.save({
      name: offer.name,
      description: offer.description,
      available_vacans: offer.available_vacans,
      date_begin: offer.date_begin,
      date_end: offer.date_end,
      status: offer.status,
      gender: offer.gender,
      salary: offer.salary,
      min_age: offer.min_age,
      max_age: offer.max_age,
      employer: employer,
    });

    return savedOffer;
  }
}
