import { JobOffer } from '../../../job-offers/domain/job-offer.model';
import { DeadLine } from '../../../job-offers/domain/value-objects/dead-line.vo';
import { Duration } from '../../../job-offers/domain/value-objects/duration.vo';
import { Money } from '../../../job-offers/domain/value-objects/money.vo';
import { SpecialRequirement } from '../../../job-offers/domain/value-objects/special-requirement.vo';
import { Title } from '../../../job-offers/domain/value-objects/title.vo';
import { DataJobOfferDto } from '../../../job-offers/dtos/data-joboffer.dto';
import { JobOfferEntity } from '../../../job-offers/entities/job-offers.entity';
import { JobSchedule } from '../../../jobs-schedule/domain/jobs-schedule.model';
import { ShowJobScheduleDto } from '../../../jobs-schedule/dtos/show-job-schedule.dto';
import { JobScheduleEntity } from '../../../jobs-schedule/entities/jobs-schedule.entity';
import { Address } from '../../../shared/address/domain/address.model';
import { Skill } from '../../../shared/skill/domain/skill.model';
import { ShowSkillDto } from '../../../shared/skill/dtos/show-skill.dto';
import { SkillEntity } from '../../../shared/skill/entities/skill.entity';
import { AddressDataMapper } from '../address/address.data-mapper';
import { DataMapper } from '../data-mapper.interface';
import { EmployeeDataMapper } from '../employee/employee.data-mapper';
import { EmployerDataMapper } from '../employer/employer.mapper';
import { JobScheduleDataMapper } from '../jobs-schedule/jobs-schedule.mapper';
import { SkillDataMapper } from '../skill/skill.data-mapper';

export class JobOfferDataMapper
  implements DataMapper<JobOffer, JobOfferEntity>
{
  _mapperEmployer = new EmployerDataMapper();
  _mapperEmployee = new EmployeeDataMapper();
  _mapperJobSchedule = new JobScheduleDataMapper();
  _mapperAddress = new AddressDataMapper();
  _mapperSkill = new SkillDataMapper();
  public toDomain(entity: JobOfferEntity): JobOffer {
    const jobOffer = new JobOffer();
    jobOffer.id = entity.id;
    jobOffer.title = Title.create(entity.title);
    jobOffer.employer = this._mapperEmployer.toDomain(entity.employer);
    jobOffer.location = this._mapperAddress.toDomain(entity.location);
    jobOffer.dead_line = DeadLine.create(entity.dead_line);

    if (entity.schedule) {
      jobOffer.schedules = entity.schedule.map((schedule: JobScheduleEntity) =>
        this._mapperJobSchedule.toDomain(schedule),
      );
    }

    if (entity.skills) {
      jobOffer.skills = entity.skills.map((skill: SkillEntity) =>
        this._mapperSkill.toDomain(skill),
      );
    }

    if (jobOffer.special_requirements) {
      jobOffer.special_requirements = SpecialRequirement.create(
        entity.special_requirements,
      );
    }

    if (jobOffer.duration) {
      jobOffer.duration = Duration.create(entity.duration);
    }
    if (jobOffer.hourly_rate) {
      jobOffer.hourly_rate = Money.create(entity.hourly_rate);
    }

    if (entity.employee) {
      jobOffer.employee = this._mapperEmployee.toDomain(entity.employee);
    } else {
      jobOffer.employee = null;
    }

    jobOffer.status = entity.status;
    return jobOffer;
  }

  public toDalEntity(jobOffer: JobOffer): JobOfferEntity {
    const jobOfferEntity = new JobOfferEntity();
    if (jobOffer.id) {
      jobOfferEntity.id = jobOffer.id;
    }
    if (jobOffer.title) {
      jobOfferEntity.title = jobOffer.title.value;
    }

    if (jobOffer.employer) {
      jobOfferEntity.employer = this._mapperEmployer.toDalEntity(
        jobOffer.employer,
      );
    }
    if (jobOffer.location) {
      jobOfferEntity.location = this._mapperAddress.toDalEntity(
        jobOffer.location,
      );
    }

    if (jobOffer.dead_line) {
      jobOfferEntity.dead_line = jobOffer.dead_line.value;
    }
    if (jobOffer.schedules) {
      jobOfferEntity.schedule = jobOffer.schedules.map(
        (schedule: JobSchedule) =>
          this._mapperJobSchedule.toDalEntity(schedule),
      );
    }

    if (jobOffer.skills) {
      jobOfferEntity.skills = jobOffer.skills.map((skill: Skill) =>
        this._mapperSkill.toDalEntity(skill),
      );
    }

    if (jobOffer.special_requirements) {
      jobOfferEntity.special_requirements = jobOffer.special_requirements.value;
    }
    if (jobOffer.duration) {
      jobOfferEntity.duration = jobOffer.duration.value;
    }
    if (jobOffer.hourly_rate) {
      jobOfferEntity.hourly_rate = jobOffer.hourly_rate.value;
    }
    if (jobOffer.employee) {
      jobOfferEntity.employee = this._mapperEmployee.toDalEntity(
        jobOffer.employee,
      );
    }
    if (jobOffer.status) {
      jobOfferEntity.status = jobOffer.status;
    }

    return jobOfferEntity;
  }

  public toDomainFromShowDto(jobOfferDto: DataJobOfferDto) {
    const jobOffer: JobOffer = new JobOffer();
    let address: Address;
    if (jobOfferDto.location) {
      address = this._mapperAddress.toDomainFromShowDto(jobOfferDto.location);
      jobOffer.location = address;
    }
    if (jobOfferDto.title) {
      jobOffer.title = Title.create(jobOfferDto.title);
    }
    if (jobOfferDto.dead_line) {
      jobOffer.dead_line = DeadLine.create(new Date(jobOfferDto.dead_line));
    }
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
    }
    if (jobOfferDto.duration) {
      jobOffer.duration = Duration.create(jobOfferDto.duration);
    }

    if (jobOfferDto.hourly_rate) {
      jobOffer.hourly_rate = Money.create(jobOfferDto.hourly_rate);
    }
    return jobOffer;
  }
}
