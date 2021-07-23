// import { NotFoundException } from '@nestjs/common';

import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Employer } from '../domain/employer.model';
import { CreateEmployerDto } from '../dtos/create-employer.dto';
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

  async createEmployer(employerData: CreateEmployerDto): Promise<number> {
    if (!employerData) {
      throw new BadRequestException("The employer data can't be empty");
    }
    const savedEmployer: ReadEmployerDto =
      await this._employerRepository.createEmployer(employerData);

    return savedEmployer.id;
  }
}
