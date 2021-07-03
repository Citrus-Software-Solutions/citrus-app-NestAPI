import { Name } from '../../../shared/domain/name.model';
import { JobOffer } from '../../../job-offers/domain/job-offer.model';
import { JobOfferEntity } from '../../../job-offers/entities/job-offers.entity';
import { DataMapper } from '../data-mapper.interface';
import { EmployerDataMapper } from '../employer/employer.mapper';

export class JobOfferDataMapper
  implements DataMapper<JobOffer, JobOfferEntity>
{
  constructor(private readonly _mapperEmployer: EmployerDataMapper) {}

  public toDomain(entity: JobOfferEntity): JobOffer {
    const employer = new JobOffer();
    employer.id = entity.id;
    employer.name = entity.name;
    employer.description = entity.description;
    employer.available_vacans = entity.available_vacans;
    employer.date_begin = entity.date_begin;
    employer.date_end = entity.date_end;
    employer.status = entity.status;
    employer.gender = entity.gender;
    employer.salary = entity.salary;
    employer.min_age = entity.min_age;
    employer.max_age = entity.max_age;
    employer.creador = this._mapperEmployer.toDomain(entity.employer);
    // employer.creador.id = entity.employer.id;
    // employer.creador.name = Name.create(entity.employer.name);

    console.log(employer);
    return employer;
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
