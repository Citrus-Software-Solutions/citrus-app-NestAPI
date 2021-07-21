// import { NotFoundException } from '@nestjs/common';
// import { Name } from 'src/shared/domain/name.model';
// import { EmployerStatus } from '../domain/employer-status.model';
// import { Employer } from '../domain/employer.model';

import { BadRequestException, Inject, Injectable } from '@nestjs/common';
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
    const employer: Employer[] = await this._employerRepository.findEmployers();

    return employer.map((empl: Employer) =>
      plainToClass(ReadEmployerDto, empl),
    );
  }

  async getEmployerById(employerId: number): Promise<ReadEmployerDto> {
    if (!employerId) {
      throw new BadRequestException('id must be sent');
    }

    return plainToClass(
      ReadEmployerDto,
      this._employerRepository.findEmployerById(employerId),
    );
  }
}
