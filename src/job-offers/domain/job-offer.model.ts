import { Employer } from '../../employers/domain/employer.model';

export class JobOffer {
  public id: number;
  public name: string;
  public description: string;
  public availableVacans: number;
  public dateBegin: Date;
  public dateEnd: Date;
  public status: string;
  public gender: string;
  public salary: number;
  public minAge?: number;
  public maxAge?: number;
  public creador: Employer;
}
