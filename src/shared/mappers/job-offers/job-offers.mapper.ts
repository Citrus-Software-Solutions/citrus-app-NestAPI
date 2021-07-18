import { DeadLine } from '../../../job-offers/domain/value-objects/dead-line.vo';
import { Duration } from '../../../job-offers/domain/value-objects/duration.vo';
import { Money } from '../../../job-offers/domain/value-objects/money.vo';
import { SpecialRequirement } from '../../../job-offers/domain/value-objects/special-requirement.vo';
import { Title } from '../../../job-offers/domain/value-objects/title.vo';
import { JobOffer } from '../../../job-offers/domain/job-offer.model';
import { JobOfferEntity } from '../../../job-offers/entities/job-offers.entity';
import { DataMapper } from '../data-mapper.interface';
import { EmployeeDataMapper } from '../employee/employee.data-mapper';
import { EmployerDataMapper } from '../employer/employer.mapper';

export class JobOfferDataMapper
  implements DataMapper<JobOffer, JobOfferEntity>
{
  _mapperEmployer = new EmployerDataMapper();
  _mapperEmployee = new EmployeeDataMapper();
  // _mapperJobSchedule = new JobScheduleDataMapper();
  public toDomain(entity: JobOfferEntity): JobOffer {
    const jobOffer = new JobOffer();
    jobOffer.id = entity.id;
    jobOffer.title = Title.create(entity.title);
    jobOffer.employer = this._mapperEmployer.toDomain(entity.employer);
    jobOffer.dead_line = DeadLine.create(entity.dead_line);
    // jobOffer.schedules = entity.schedule.map((schedule: JobScheduleEntity) =>
    //   this._mapperJobSchedule.toDomain(schedule),
    // );
    jobOffer.special_requirements = SpecialRequirement.create(
      entity.special_requirements,
    );
    jobOffer.duration = Duration.create(entity.duration);
    jobOffer.hourly_rate = Money.create(entity.hourly_rate);
    jobOffer.employee = this._mapperEmployee.toDomain(entity.employee);
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

    jobOfferEntity.dead_line = jobOffer.dead_line.value;
    // jobOfferEntity.schedule = jobOffer.schedules.map((schedule: JobSchedule) =>
    //   this._mapperJobSchedule.toDalEntity(schedule),
    // );
    jobOfferEntity.special_requirements = jobOffer.special_requirements.value;
    jobOfferEntity.duration = jobOffer.duration.value;
    jobOfferEntity.hourly_rate = jobOffer.hourly_rate.value;
    jobOfferEntity.employee = this._mapperEmployee.toDalEntity(
      jobOffer.employee,
    );
    jobOfferEntity.status = jobOffer.status;

    return jobOfferEntity;
  }
}
