import { EmployerStatus } from '../domain/employer-status.model';
import { Employer } from '../domain/employer.model';

export interface IEmployersService {
  createEmployer(companyName: string, status: EmployerStatus): any;
  getEmployers(): Employer[];
  getSingleEmployer(companyName: string): any;
  updateEmployer(
    oldName: string,
    companyName: string,
    status: EmployerStatus,
  ): any;
  deleteEmployer(companyName: string): any;
}
