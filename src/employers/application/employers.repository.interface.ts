import { Employer } from '../domain/employer.model';

export interface IEmployerRepository {
  findEmployers(): Promise<Employer[]>;
  findEmployerById(employerId: number): Promise<Employer[]>;
}
