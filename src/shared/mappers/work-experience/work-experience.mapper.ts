import { JobTitle } from '../../../contact-information/domain/value-objects/job-title.vo';
import { CompanyName } from '../../../work-experience/domain/value-objects/company-name.vo';
import { WorkExperience } from '../../../work-experience/domain/work-experience.model';
import { WorkExperienceEntity } from '../../../work-experience/entities/work-experience.entity';
import { DataMapper } from '../data-mapper.interface';

export class WorkExperienceDataMapper
  implements DataMapper<WorkExperience, WorkExperienceEntity>
{
  toDomain(entity: WorkExperienceEntity): WorkExperience {
    const workExperience = new WorkExperience();
    workExperience.job_title = JobTitle.create(entity.job_title);
    workExperience.company_name = CompanyName.create(entity.company_name);
    workExperience.category = entity.category;

    return workExperience;
  }

  toDalEntity(domain: WorkExperience): WorkExperienceEntity {
    const workExperienceEntity = new WorkExperienceEntity();
    workExperienceEntity.job_title = domain.job_title.value;
    workExperienceEntity.company_name = domain.company_name.value;
    workExperienceEntity.category = domain.category;

    return workExperienceEntity;
  }
}
