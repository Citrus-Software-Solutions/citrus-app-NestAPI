import { Name } from '../../shared/domain/name.vo';
import { JobTitle } from '../../contact-information/domain/value-objects/job-title.vo';
import { CompanyName } from '../../work-experience/domain/value-objects/company-name.vo';

export class Reference {
  public full_name: Name;
  public job_title: JobTitle;
  public company_name: CompanyName;
  public phone_number: string;
  public email: string;
}
