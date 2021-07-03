// import { NotFoundException } from '@nestjs/common';
// import { Name } from 'src/shared/domain/name.model';
// import { EmployerStatus } from '../domain/employer-status.model';
// import { Employer } from '../domain/employer.model';

import { Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Employer } from '../domain/employer.model';
import { ReadEmployerDto } from '../dtos/read-employer.dto';
import { IEmployerRepository } from './employers.repository.interface';
import { IEmployersService } from './employers.service.interface';
@Injectable()
export class EmployersService implements IEmployersService {
  constructor(
    @Inject('EmployersRepository')
    private readonly _employerRepository: IEmployerRepository,
  ) {}

  async getEmployers(): Promise<ReadEmployerDto[]> {
    const employer: Employer[] = await this._employerRepository.getEmployers();

    return employer.map((empl: Employer) =>
      plainToClass(ReadEmployerDto, empl),
    );
  }
}
// //   private employers: Employer[] = [];

// //   createEmployer(companyName: string, status: EmployerStatus) {
// //     const newEmployer = new Employer(Name.create(companyName), status);
// //     this.employers.push(newEmployer);
// //   }
// //   getEmployers(): Employer[] {
// //     return this.employers;
// //   }
// //   getSingleEmployer(companyName: string) {
// //     const employer = this.findEmployer(companyName)[0];
// //     return employer;
// //   }
// //   updateEmployer(oldName: string, companyName: string, status: EmployerStatus) {
// //     const [employer, index] = this.findEmployer(oldName);
// //     const updatedEmployer = employer;
// //     if (oldName) {
// //       updatedEmployer.companyName = companyName;
// //     }
// //     if (status) {
// //       updatedEmployer.status = status;
// //     }
// //     this.employers[index] = updatedEmployer;
// //   }
// //   deleteEmployer(companyName: string) {
// //     const index = this.findEmployer(companyName)[1];
// //     this.employers.splice(index, 1);
// //   }

// //   private findEmployer(companyName: string): [Employer, number] {
// //     const employerIndex = this.employers.findIndex(
// //       (emp) => emp.companyName === companyName,
// //     );
// //     const employer = this.employers[employerIndex];
// //     if (!employer) {
// //       throw new NotFoundException('Could not find employer.');
// //     }
// //     return [employer, employerIndex];
// //   }
// // }
