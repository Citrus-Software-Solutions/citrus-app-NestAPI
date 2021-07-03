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
    jobOffer.available_vacans = entity.available_vacans;
    jobOffer.date_begin = entity.date_begin;
    jobOffer.date_end = entity.date_end;
    jobOffer.status = entity.status;
    jobOffer.gender = entity.gender;
    jobOffer.salary = entity.salary;
    jobOffer.min_age = entity.min_age;
    jobOffer.max_age = entity.max_age;
    jobOffer.creador = this._mapperEmployer.toDomain(entity.employer);
    // employer.creador.id = entity.employer.id;
    // employer.creador.name = Name.create(entity.employer.name);

    return jobOffer;
  }

  public toDalEntity(jobOffer: JobOffer): JobOfferEntity {
    const jobOfferEntity = new JobOfferEntity();
    jobOfferEntity.id = jobOffer.id;
    jobOfferEntity.name = jobOffer.name;
    jobOfferEntity.description = jobOffer.description;
    jobOfferEntity.available_vacans = jobOffer.available_vacans;
    jobOfferEntity.date_begin = jobOffer.date_begin;
    jobOfferEntity.date_end = jobOffer.date_end;
    jobOfferEntity.status = jobOffer.status;
    jobOfferEntity.gender = jobOffer.gender;
    jobOfferEntity.salary = jobOffer.salary;
    jobOfferEntity.min_age = jobOffer.min_age;
    jobOfferEntity.max_age = jobOffer.max_age;
    jobOfferEntity.employer = this._mapperEmployer.toDalEntity(
      jobOffer.creador,
    );

    return jobOfferEntity;
  }
}
