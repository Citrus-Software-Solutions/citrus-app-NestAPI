import { Inject, Injectable } from '@nestjs/common';
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

  async getAll(query: JSON): Promise<JobOffer[]> {
    const jobOfferEntity = await this._jobOfferPersistence.getJobOffers(query);
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

  async getById(jobOfferId: number): Promise<JobOffer> {
    const jobOfferEntity = await this._jobOfferPersistence.getById(jobOfferId);

    return this._mapper.toDomain(jobOfferEntity);
  }

  async updateStatus(
    jobOfferId: number,
    jobOfferStatus: number,
  ): Promise<{ message: string }> {
    return this._jobOfferPersistence.updateJobOfferStatus(
      jobOfferId,
      jobOfferStatus,
    );
  }

  async createJobOffer(
    jobOffer: JobOffer,
    employerId: number,
  ): Promise<JobOffer> {
    const createdJobOffer: JobOfferEntity =
      await this._jobOfferPersistence.createJobOffer(
        this._mapper.toDalEntity(jobOffer),
        employerId,
      );

    return this._mapper.toDomain(createdJobOffer);
  }

  async setEmployeeToJobOffer(
    employerId: number,
    jobOfferId: number,
  ): Promise<boolean> {
    return this._jobOfferPersistence.setEmployeeToJobOffer(
      employerId,
      jobOfferId,
    );
  }
}
