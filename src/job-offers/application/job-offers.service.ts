import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ShowJobScheduleDto } from '../../jobs-schedule/dtos/show-job-schedule.dto';
import { Address } from '../../shared/address/domain/address.model';
import { AddressDataMapper } from '../../shared/mappers/address/address.data-mapper';
import { JobScheduleDataMapper } from '../../shared/mappers/jobs-schedule/jobs-schedule.mapper';
import { SkillDataMapper } from '../../shared/mappers/skill/skill.data-mapper';
import { ShowSkillDto } from '../../shared/skill/dtos/show-skill.dto';
import { IJobOfferRepository } from '../application/job-offers.repository.interface';
import { IJobOffersService } from '../application/job-offers.service.interface';
import { JobOfferStatus } from '../domain/job-offer-status.enum';
import { JobOffer } from '../domain/job-offer.model';
import { DeadLine } from '../domain/value-objects/dead-line.vo';
import { Duration } from '../domain/value-objects/duration.vo';
import { Money } from '../domain/value-objects/money.vo';
import { SpecialRequirement } from '../domain/value-objects/special-requirement.vo';
import { Title } from '../domain/value-objects/title.vo';
import { CreatedJobOfferDto } from '../dtos/created-job-offer.dto';
import { DataJobOfferDto } from '../dtos/data-joboffer.dto';
import { ReadJobOfferDto } from '../dtos/read-joboffert.dto';

@Injectable()
export class JobOfferService implements IJobOffersService {
  constructor(
    @Inject('JobOfferRepository')
    private readonly _jobOfferRepository: IJobOfferRepository,
    private readonly _mapperAddress: AddressDataMapper,
    private readonly _mapperJobSchedule: JobScheduleDataMapper,
    private readonly _mapperSkill: SkillDataMapper,
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

    const jobOffer: JobOffer = new JobOffer();

    const address: Address = this._mapperAddress.toDomainFromReadDto(
      jobOfferDto.location,
    );

    jobOffer.title = Title.create(jobOfferDto.title);
    jobOffer.location = address;
    jobOffer.dead_line = DeadLine.create(new Date(jobOfferDto.dead_line));
    if (jobOfferDto.schedules) {
      jobOffer.schedules = jobOfferDto.schedules.map(
        (scheduleDto: ShowJobScheduleDto) =>
          this._mapperJobSchedule.toDomainFromShowDto(scheduleDto),
      );
    }

    if (jobOfferDto.skills) {
      jobOffer.skills = jobOfferDto.skills.map((skillDto: ShowSkillDto) =>
        this._mapperSkill.toDomainFromShowDto(skillDto),
      );
    }

    if (jobOfferDto.special_requirements) {
      jobOffer.special_requirements = SpecialRequirement.create(
        jobOfferDto.special_requirements,
      );
    } else {
      jobOffer.special_requirements = SpecialRequirement.create('N/A');
    }

    jobOffer.duration = Duration.create(jobOfferDto.duration);
    jobOffer.hourly_rate = Money.create(jobOfferDto.hourly_rate);

    const savedJobOffer: JobOffer =
      await this._jobOfferRepository.createJobOffer(jobOffer, employerId);

    return plainToClass(CreatedJobOfferDto, savedJobOffer);
  }
}
