import { CreatedEmployerDto } from '../dtos/created-employer.dto';
import { DataEmployerDto } from '../dtos/data-employer.dto';
import { ReadEmployerDto } from '../dtos/read-employer.dto';

export interface IEmployersService {
  getEmployers(): Promise<ReadEmployerDto[]>;
  getEmployerById(employerId: number): Promise<ReadEmployerDto>;
  getEmployerByUserId(userId: number): Promise<ReadEmployerDto>;
  createEmployer(
    employer: Partial<DataEmployerDto>,
    userId: number,
  ): Promise<CreatedEmployerDto>;
}
