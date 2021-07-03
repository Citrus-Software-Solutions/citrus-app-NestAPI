//import { EmployerStatus } from '../domain/employer-status.model';
import { ReadEmployerDto } from '../dtos/read-employer.dto';

export interface IEmployersService {
  //   createEmployer(companyName: string, status: EmployerStatus): any;
  getEmployers(): Promise<ReadEmployerDto[]>;
  //   getSingleEmployer(companyName: string): any;
  //   updateEmployer(
  //     oldName: string,
  //     companyName: string,
  //     status: EmployerStatus,
  //   ): any;
  //   deleteEmployer(companyName: string): any;
}
