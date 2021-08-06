import { CreatedEmployerDto } from '../dtos/created-employer.dto';
import { DataEmployerDto } from '../dtos/data-employer.dto';
import { ReadEmployerDto } from '../dtos/read-employer.dto';
import { UpdateEmployerDto } from '../dtos/update-employer.dto';

export interface IEmployersService {
  getEmployers(): Promise<ReadEmployerDto[]>;
  getEmployerById(employerId: number): Promise<ReadEmployerDto>;
  getEmployerByUserId(userId: number): Promise<ReadEmployerDto>;
  updateEmployer(
    employerId: number,
    employer: UpdateEmployerDto,
  ): Promise<ReadEmployerDto>;
  createEmployer(
    employer: DataEmployerDto,
    userId: number,
  ): Promise<CreatedEmployerDto>;
}
