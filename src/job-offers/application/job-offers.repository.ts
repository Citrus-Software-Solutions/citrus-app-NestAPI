import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { JobOfferDataMapper } from '../../shared/mappers/job-offers/job-offers.mapper';
import { JobOffer } from '../domain/job-offer.model';
import { JobOfferEntity } from '../entities/job-offers.entity';
import { IJobOffersPersistence } from './job-offers.persistence.interface';
import { IJobOfferRepository } from './job-offers.repository.interface';

@Injectable()
export class JobOfferRepository implements IJobOfferRepository {
  constructor(
    @Inject('JobOfferPersistenceAdapter')
    private readonly _jobOfferPersistence: IJobOffersPersistence,
    private readonly _mapper: JobOfferDataMapper,
  ) {}

  async getAll(): Promise<JobOffer[]> {
    const jobOfferEntity = await this._jobOfferPersistence.getJobOffers();
    return jobOfferEntity.map((jobOffer: JobOfferEntity) =>
      this._mapper.toDomain(jobOffer),
    );
  }

  async getByEmployer(employerId: number): Promise<JobOffer[]> {
    const jobOfferEntity = await this._jobOfferPersistence.getByEmployerId(
      employerId,
    );
    return jobOfferEntity.map((jobOffer: JobOfferEntity) =>
      this._mapper.toDomain(jobOffer),
    );
  }

  async updateStatus(jobOfferId: number): Promise<string> {
    return this._jobOfferPersistence.updateJobOfferStatus(jobOfferId);
  }

  async create(offer: JobOffer, employerId: number): Promise<JobOffer> {
    const jobOfferEntity: JobOfferEntity = this._mapper.toDalEntity(offer);

    const createdOffer: JobOfferEntity =
      await this._jobOfferPersistence.createJobOffer(
        jobOfferEntity,
        employerId,
      );

    if (!createdOffer) {
      throw new BadRequestException('Offer could not be created');
    }

    return this._mapper.toDomain(createdOffer);
  }
}
