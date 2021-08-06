import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { AddressDataMapper } from '../../shared/mappers/address/address.data-mapper';
import { JobOfferDataMapper } from '../../shared/mappers/job-offers/job-offers.mapper';
import { IJobOfferRepository } from '../application/job-offers.repository.interface';
import { IJobOffersService } from '../application/job-offers.service.interface';
import { JobOfferStatus } from '../domain/job-offer-status.enum';
import { JobOffer } from '../domain/job-offer.model';
import { CreatedJobOfferDto } from '../dtos/created-job-offer.dto';
import { DataJobOfferDto } from '../dtos/data-joboffer.dto';
import { ReadJobOfferDto } from '../dtos/read-joboffert.dto';
import { ShowJobOfferDto } from '../dtos/show-job-offer.dto';
import { UpdateJobOfferDto } from '../dtos/update-job-offer.dto';

@Injectable()
export class JobOfferService implements IJobOffersService {
  constructor(
    @Inject('JobOfferRepository')
    private readonly _jobOfferRepository: IJobOfferRepository,
    private readonly _mapperAddress: AddressDataMapper,
    private readonly _mapperJobOffer: JobOfferDataMapper,
  ) {}

  async getAll(query: JSON): Promise<ReadJobOfferDto[]> {
    const jobOffers: JobOffer[] = await this._jobOfferRepository.getAll(query);
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

  async getById(jobOfferId: number): Promise<ReadJobOfferDto> {
    if (!jobOfferId) {
      throw new BadRequestException('id must be sent');
    }

    return plainToClass(
      ReadJobOfferDto,
      this._jobOfferRepository.getById(jobOfferId),
    );
  }

  async updateJobOfferStatus(
    jobOfferId: number,
    jobOfferStatus: number,
  ): Promise<{ message: string }> {
    if (!jobOfferId) {
      throw new BadRequestException('id must be sent');
    }
    if (!(jobOfferStatus in JobOfferStatus)) {
      throw new BadRequestException('id should be between 0 and 6');
    }
    return this._jobOfferRepository.updateStatus(jobOfferId, jobOfferStatus);
  }

  async updateJobOffer(
    jobOfferId: number,
    jobOfferDto: UpdateJobOfferDto,
  ): Promise<ShowJobOfferDto> {
    if (!jobOfferId) {
      throw new BadRequestException('id must be sent');
    }

    if (!jobOfferDto) {
      throw new BadRequestException('Data to update must be sent');
    }

    const jobOffer: JobOffer =
      this._mapperJobOffer.toDomainFromShowDto(jobOfferDto);

    return plainToClass(
      ShowJobOfferDto,
      this._jobOfferRepository.updateJobOffer(jobOfferId, jobOffer),
    );
  }

  async createJobOffer(
    jobOfferDto: DataJobOfferDto,
    employerId: number,
  ): Promise<CreatedJobOfferDto> {
    if (!jobOfferDto) {
      throw new BadRequestException('job offer data must be sent');
    }

    if (!employerId) {
      throw new BadRequestException('employer id must be sent');
    }

    const jobOffer: JobOffer =
      this._mapperJobOffer.toDomainFromShowDto(jobOfferDto);

    const savedJobOffer: JobOffer =
      await this._jobOfferRepository.createJobOffer(jobOffer, employerId);

    return plainToClass(CreatedJobOfferDto, savedJobOffer);
  }

  async registerWorker(employeeId: number, jobOfferId: number) {
    if (employeeId && jobOfferId) {
      return await this._jobOfferRepository.setEmployeeToJobOffer(
        employeeId,
        jobOfferId,
      );
    }
  }
}
