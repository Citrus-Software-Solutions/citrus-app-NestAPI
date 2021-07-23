import { Employer } from '../domain/employer.model';
import { ReadEmployerDto } from '../dtos/read-employer.dto';

export interface IEmployerRepository {
  findEmployers(): Promise<Employer[]>;
  findEmployerById(employerId: number): Promise<Employer>;
  createEmployer(employer: ReadEmployerDto): Promise<ReadEmployerDto>;
}
