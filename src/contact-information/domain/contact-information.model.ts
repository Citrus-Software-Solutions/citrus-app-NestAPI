import { Name } from '../../shared/domain/name.vo';
import { JobTitle } from '../../shared/domain/job-title.vo';

export class ContactInformation {
  public full_name: Name;
  public job_title: JobTitle;
  public phone_number: string;
  public email: string;
}
