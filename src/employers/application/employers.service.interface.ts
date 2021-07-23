import { CreateEmployerDto } from '../dtos/create-employer.dto';
import { ReadEmployerDto } from '../dtos/read-employer.dto';

export interface IEmployersService {
  getEmployers(): Promise<ReadEmployerDto[]>;
  getEmployerById(employerId: number): Promise<ReadEmployerDto>;
  createEmployer(employer: CreateEmployerDto): Promise<number>;
}
