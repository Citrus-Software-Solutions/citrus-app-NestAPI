import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { JobOfferDataMapper } from '../../shared/mappers/job-offers/job-offers.mapper';
import { JobOffer } from '../domain/job-offer.model';
import { DataJobOfferDto } from '../dtos/data-joboffer.dto';
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

  async updateStatus(jobOfferId: number): Promise<{ message: string }> {
    return this._jobOfferPersistence.updateJobOfferStatus(jobOfferId);
  }

  async create(offer: DataJobOfferDto, employerId: number): Promise<JobOffer> {
    const realJobOffer = this.dtoJobtoReal(offer);
    const jobOfferEntity: JobOfferEntity =
      this._mapper.toDalEntity(realJobOffer);

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
  private dtoJobtoReal(dtoJob: DataJobOfferDto) {
    const realJobOffer = new JobOffer();
    //   realJobOffer.availableVacans = dtoJob.availableVacans;
    //   realJobOffer.dateBegin = new Date(dtoJob.dateBegin);
    //   realJobOffer.dateEnd = new Date(dtoJob.dateEnd);
    //   realJobOffer.description = dtoJob.description;
    //   realJobOffer.gender = dtoJob.gender;
    //   realJobOffer.maxAge = dtoJob.maxAge;
    //   realJobOffer.minAge = dtoJob.minAge;
    //   realJobOffer.name = dtoJob.name;
    //   realJobOffer.salary = dtoJob.salary;
    //   realJobOffer.status = 'Published';
    return realJobOffer;
    // }
  }
}
