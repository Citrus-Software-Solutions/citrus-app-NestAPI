import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IEmployersPersistence } from '../../employers/application/employers.persistence.interface';
import { EmployerEntity } from '../../employers/entities/employers.entity';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IJobOffersPersistence } from '../application/job-offers.persistence.interface';
import { JobOfferEntity } from '../entities/job-offers.entity';
import { JobOfferStatus } from '../domain/job-offer-status.enum';

@EntityRepository(JobOfferEntity)
@Injectable()
export class JobOfferPersistenceAdapter
  extends Repository<JobOfferEntity>
  implements IJobOffersPersistence
{
  constructor(
    @Inject('EmployersPersisteceAdapter')
    private readonly _employersPersistence: IEmployersPersistence,
  ) {
    super();
  }

  async getJobOffers(query: JSON): Promise<JobOfferEntity[]> {
    const jobOfferRepository = getRepository(JobOfferEntity);
    const jobOffers: JobOfferEntity[] = await jobOfferRepository.find({
      where: query,
    });

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
      title: offer.title,
      dead_line: offer.dead_line,
      special_requirements: offer.special_requirements,
      duration: offer.duration,
      hourly_rate: offer.hourly_rate,
      status: offer.status,
      employer: employer,
    });

    return savedOffer;
  }

  async getById(offerId: number): Promise<JobOfferEntity> {
    const jobOfferRepository = getRepository(JobOfferEntity);

    const existOffer = await jobOfferRepository.findOne(offerId);

    if (!existOffer) {
      throw new NotFoundException('This offer does not exist');
    }

    return existOffer;
  }

  async updateJobOfferStatus(
    jobOfferId: number,
    jobOfferStatus: number,
  ): Promise<{ message: string }> {
    const jobOfferRepository = getRepository(JobOfferEntity);

    const jobOffer: JobOfferEntity = await jobOfferRepository.findOne(
      jobOfferId,
    );

    if (!jobOffer) {
      throw new NotFoundException();
    }

    let response = 'Status could not be changed';

    if (jobOffer.status in JobOfferStatus) {
      await jobOfferRepository.update(jobOfferId, {
        status: jobOfferStatus,
      });
      response = `Status changed to ${JobOfferStatus[jobOfferStatus]}`;
    }

    return { message: response };
  }
}
