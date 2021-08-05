import { Name } from '../../shared/domain/name.vo';
import { ID } from '../../shared/domain/id.vo';
import { JobTitle } from '../../shared/domain/job-title.vo';

export class StaffMember {
  public id: ID;
  public first_name: Name;
  public middle_name: Name;
  public last_name: Name;
  public title: JobTitle;
}
