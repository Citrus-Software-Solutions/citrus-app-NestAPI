import { JobTitle } from '../../domain/job-title.vo';
import { CompanyName } from '../../../work-experience/domain/value-objects/company-name.vo';
import { Reference } from '../../../reference/domain/reference.model';
import { ReferenceEntity } from '../../../reference/entities/reference.entity';
import { DataMapper } from '../data-mapper.interface';
import { Name } from '../../../shared/domain/name.vo';

export class ReferenceDataMapper
  implements DataMapper<Reference, ReferenceEntity>
{
  toDomain(entity: ReferenceEntity): Reference {
    const reference = new Reference();
    reference.full_name = Name.create(entity.full_name);
    reference.job_title = JobTitle.create(entity.job_title);
    reference.company_name = CompanyName.create(entity.company_name);
    reference.phone_number = entity.phone_number;
    reference.email = entity.email;

    return reference;
  }

  toDalEntity(domain: Reference): ReferenceEntity {
    const referenceEntity = new ReferenceEntity();
    referenceEntity.full_name = domain.full_name.value;
    referenceEntity.job_title = domain.job_title.value;
    referenceEntity.company_name = domain.company_name.value;
    referenceEntity.phone_number = domain.phone_number;
    referenceEntity.email = domain.email;

    return referenceEntity;
  }
}
