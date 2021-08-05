import { JobTitle } from '../../shared/domain/job-title.vo';
import { CompanyName } from './value-objects/company-name.vo';

export class WorkExperience {
  public job_title: JobTitle;
  public company_name: CompanyName;
  public category: number;
}
