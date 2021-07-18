import { Employee } from '../../employee/domain/employee.model';
import { Employer } from '../../employers/domain/employer.model';
import { DeadLine } from './value-objects/dead-line.vo';
import { Duration } from './value-objects/duration.vo';
import { Money } from './value-objects/money.vo';
import { SpecialRequirement } from './value-objects/special-requirement.vo';
import { Title } from './value-objects/title.vo';

export class JobOffer {
  public id: number;
  public title: Title;
  public employer: Employer;
  //public location: Location;
  public dead_line: DeadLine;
  // public schedules: JobSchedule[];
  //public skills: Skill[];
  public special_requirements: SpecialRequirement;
  //public certifications: Certification[]; -- requiere de los cursos
  public duration: Duration;
  public hourly_rate: Money;
  public employee?: Employee;
  public status: number; //Podría ser un ENUM
}
