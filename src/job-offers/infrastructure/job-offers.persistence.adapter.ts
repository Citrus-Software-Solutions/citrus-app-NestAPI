import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IEmployersPersistence } from '../../employers/application/employers.persistence.interface';
import { EmployerEntity } from '../../employers/entities/employers.entity';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IJobOffersPersistence } from '../application/job-offers.persistence.interface';
import { JobOfferEntity } from '../entities/job-offers.entity';

@EntityRepository(JobOfferEntity)
@Injectable()
export class JobOfferPersisteceAdapter
  extends Repository<JobOfferEntity>
  implements IJobOffersPersistence
{
  constructor(
    @Inject('EmployersPersisteceAdapter')
    private readonly _employersPersistence: IEmployersPersistence,
  ) {
    super();
  }

  async getJobOffers(): Promise<JobOfferEntity[]> {
    const jobOfferRepository = getRepository(JobOfferEntity);
    const jobOffers: JobOfferEntity[] = await jobOfferRepository.find();

    return jobOffers;
  }

  async getByEmployerId(employerId: number): Promise<JobOfferEntity[]> {
    const employer: EmployerEntity =
      await this._employersPersistence.getEmployerById(employerId);

    if (!employer) {
      throw new NotFoundException();
    }

    const jobOfferRepository = getRepository(JobOfferEntity);
    const jobOffers: JobOfferEntity[] = await jobOfferRepository.find({
      relations: ['employer'],
      where: { employer: employer },
    });

    if (!jobOffers) {
      throw new NotFoundException(
        'This employer does not have job offers created',
      );
    }

    return jobOffers;
  }

  async createJobOffer(
    offer: JobOfferEntity,
    employerId: number,
  ): Promise<JobOfferEntity> {
    const employer: EmployerEntity =
      await this._employersPersistence.getEmployerById(employerId);

    if (!employer) {
      throw new NotFoundException();
    }

    const jobOfferRepository = getRepository(JobOfferEntity);
    const savedOffer: JobOfferEntity = await jobOfferRepository.save({
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
