//import { EmployerStatus } from '../domain/employer-status.model';
import { Employer } from '../domain/employer.model';
import { EmployerEntity } from '../entities/employers.entity';

export interface IEmployersService {
  //   createEmployer(companyName: string, status: EmployerStatus): any;
  getEmployers(): Promise<EmployerEntity[]>;
  //   getSingleEmployer(companyName: string): any;
  //   updateEmployer(
  //     oldName: string,
  //     companyName: string,
  //     status: EmployerStatus,
  //   ): any;
  //   deleteEmployer(companyName: string): any;
}
