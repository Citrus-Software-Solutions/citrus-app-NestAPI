import { NotFoundException } from '@nestjs/common';
import { EmployerStatus } from '../domain/employer-status.model';
import { Employer } from '../domain/employer.model';
import { IEmployersService } from './employers.service.interface';

export class EmployersService implements IEmployersService {
  private employers: Employer[] = [];

  createEmployer(companyName: string, status: EmployerStatus) {
    const newEmployer = new Employer(companyName, status);
    this.employers.push(newEmployer);
  }
  getEmployers(): Employer[] {
    return [...this.employers];
  }
  getSingleEmployer(companyName: string) {
    const employer = this.findEmployer(companyName)[0];
    return { ...employer };
  }
  updateEmployer(oldName: string, companyName: string, status: EmployerStatus) {
    const [employer, index] = this.findEmployer(oldName);
    const updatedEmployer = { ...employer };
    if (oldName) {
      updatedEmployer.companyName = companyName;
    }
    if (status) {
      updatedEmployer.status = status;
    }
    this.employers[index] = updatedEmployer;
  }
  deleteEmployer(companyName: string) {
    const index = this.findEmployer(companyName)[1];
    this.employers.splice(index, 1);
  }

  private findEmployer(companyName: string): [Employer, number] {
    const employerIndex = this.employers.findIndex(
      (emp) => emp.companyName === companyName,
    );
    const employer = this.employers[employerIndex];
    if (!employer) {
      throw new NotFoundException('Could not find employer.');
    }
    return [employer, employerIndex];
  }
}
