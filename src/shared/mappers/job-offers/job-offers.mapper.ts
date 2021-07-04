import { JobOffer } from '../../../job-offers/domain/job-offer.model';
import { JobOfferEntity } from '../../../job-offers/entities/job-offers.entity';
import { DataMapper } from '../data-mapper.interface';
import { EmployerDataMapper } from '../employer/employer.mapper';

export class JobOfferDataMapper
  implements DataMapper<JobOffer, JobOfferEntity>
{
  _mapperEmployer = new EmployerDataMapper();
  public toDomain(entity: JobOfferEntity): JobOffer {
    const jobOffer = new JobOffer();
    jobOffer.id = entity.id;
    jobOffer.name = entity.name;
    jobOffer.description = entity.description;
    jobOffer.availableVacans = entity.available_vacans;
    jobOffer.dateBegin = entity.date_begin;
    jobOffer.dateEnd = entity.date_end;
    jobOffer.status = entity.status;
    jobOffer.gender = entity.gender;
    jobOffer.salary = entity.salary;
    jobOffer.minAge = entity.min_age;
    jobOffer.maxAge = entity.max_age;
    jobOffer.creador = this._mapperEmployer.toDomain(entity.employer);

    return jobOffer;
  }

  public toDalEntity(jobOffer: JobOffer): JobOfferEntity {
    const jobOfferEntity = new JobOfferEntity();
    jobOfferEntity.id = jobOffer.id;
    jobOfferEntity.name = jobOffer.name;
    jobOfferEntity.description = jobOffer.description;
    jobOfferEntity.available_vacans = jobOffer.availableVacans;
    jobOfferEntity.date_begin = jobOffer.dateBegin;
    jobOfferEntity.date_end = jobOffer.dateEnd;
    jobOfferEntity.status = jobOffer.status;
    jobOfferEntity.gender = jobOffer.gender;
    jobOfferEntity.salary = jobOffer.salary;
    jobOfferEntity.min_age = jobOffer.minAge;
    jobOfferEntity.max_age = jobOffer.maxAge;
    if (jobOffer.creador) {
      jobOfferEntity.employer = this._mapperEmployer.toDalEntity(
        jobOffer.creador,
      );
    }

    return jobOfferEntity;
  }
}
