import { Employer } from '../domain/employer.model';
import { DataEmployerDto } from '../dtos/data-employer.dto';

export interface IEmployerRepository {
  getEmployers(): Promise<Employer[]>;
  getEmployerById(employerId: number): Promise<Employer>;
  createEmployer(employer: DataEmployerDto, userId: number): Promise<Employer>;
}
