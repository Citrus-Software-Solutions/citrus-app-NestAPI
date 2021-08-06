import { Employer } from '../domain/employer.model';
import { UpdateEmployerDto } from '../dtos/update-employer.dto';

export interface IEmployerRepository {
  getEmployers(): Promise<Employer[]>;
  getEmployerById(employerId: number): Promise<Employer>;
  getEmployerByUserId(userId: number): Promise<Employer>;
  updateEmployer(
    employerId: number,
    employer: UpdateEmployerDto,
  ): Promise<Employer>;
  createEmployer(employer: Employer, userId: number): Promise<Employer>;
}
