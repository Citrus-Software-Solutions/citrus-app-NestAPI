import { JobTitle } from '../../contact-information/domain/value-objects/job-title.vo';
import { CompanyName } from './value-objects/company-name.vo';

export class WorkExperience {
  public job_title: JobTitle;
  public company_name: CompanyName;
  public category: number;
}
