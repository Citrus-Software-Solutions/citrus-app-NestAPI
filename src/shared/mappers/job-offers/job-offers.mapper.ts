import { JobOffer } from '../../../job-offers/domain/job-offer.model';
import { DeadLine } from '../../../job-offers/domain/value-objects/dead-line.vo';
import { Duration } from '../../../job-offers/domain/value-objects/duration.vo';
import { Money } from '../../../job-offers/domain/value-objects/money.vo';
import { SpecialRequirement } from '../../../job-offers/domain/value-objects/special-requirement.vo';
import { Title } from '../../../job-offers/domain/value-objects/title.vo';
import { JobOfferEntity } from '../../../job-offers/entities/job-offers.entity';
import { JobSchedule } from '../../../jobs-schedule/domain/jobs-schedule.model';
import { JobScheduleEntity } from '../../../jobs-schedule/entities/jobs-schedule.entity';
import { Skill } from '../../../shared/skill/domain/skill.model';
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

    jobOffer.special_requirements = SpecialRequirement.create(
      entity.special_requirements,
    );

    jobOffer.duration = Duration.create(entity.duration);
    jobOffer.hourly_rate = Money.create(entity.hourly_rate);

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
    jobOfferEntity.id = jobOffer.id;
    jobOfferEntity.title = jobOffer.title.value;

    if (jobOffer.employer) {
      jobOfferEntity.employer = this._mapperEmployer.toDalEntity(
        jobOffer.employer,
      );
    }
    jobOfferEntity.location = this._mapperAddress.toDalEntity(
      jobOffer.location,
    );
    jobOfferEntity.dead_line = jobOffer.dead_line.value;
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

    jobOfferEntity.special_requirements = jobOffer.special_requirements.value;
    jobOfferEntity.duration = jobOffer.duration.value;
    jobOfferEntity.hourly_rate = jobOffer.hourly_rate.value;
    if (jobOfferEntity.employee) {
      jobOfferEntity.employee = this._mapperEmployee.toDalEntity(
        jobOffer.employee,
      );
    }

    jobOfferEntity.status = jobOffer.status;

    return jobOfferEntity;
  }
}
