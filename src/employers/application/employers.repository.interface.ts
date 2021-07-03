import { Employer } from '../domain/employer.model';

export interface IEmployerRepository {
  getEmployers(): Promise<Employer[]>;
}