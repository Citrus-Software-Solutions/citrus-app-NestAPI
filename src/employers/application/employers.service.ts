import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Address } from '../../shared/address/domain/address.model';
import { Employer } from '../domain/employer.model';
import { DataEmployerDto } from '../dtos/data-employer.dto';
import { ReadEmployerDto } from '../dtos/read-employer.dto';
import { IEmployerRepository } from './employers.repository.interface';
import { IEmployersService } from './employers.service.interface';
import { SpecialRequirement } from '../../job-offers/domain/value-objects/special-requirement.vo';
import { Name } from '../../shared/domain/name.vo';
import { CreatedEmployerDto } from '../dtos/created-employer.dto';
import { AddressDataMapper } from '../../shared/mappers/address/address.data-mapper';
import { UpdateEmployerDto } from '../dtos/update-employer.dto';
import { UpdatedEmployerDto } from '../dtos/updated-employer.dto';
@Injectable()
export class EmployersService implements IEmployersService {
  constructor(
    @Inject('EmployersRepository')
    private readonly _employerRepository: IEmployerRepository,
    private readonly _mapperAddress: AddressDataMapper,
  ) {}

  async getEmployers(): Promise<ReadEmployerDto[]> {
    const employer: Employer[] = await this._employerRepository.getEmployers();

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
      this._employerRepository.getEmployerById(employerId),
    );
  }

  async getEmployerByUserId(userId: number): Promise<ReadEmployerDto> {
    if (!userId) {
      throw new BadRequestException('id must be sent');
    }

    return plainToClass(
      ReadEmployerDto,
      this._employerRepository.getEmployerByUserId(userId),
    );
  }

  async updateEmployer(
    employerId: number,
    employerDto: UpdateEmployerDto,
  ): Promise<UpdatedEmployerDto> {
    if (!employerId) {
      throw new BadRequestException('id must be sent');
    }

    if (!employerDto) {
      throw new BadRequestException('Data to update must be sent');
    }

    const employer: Employer = new Employer();

    const address: Address = this._mapperAddress.toDomainFromShowDto(
      employerDto.address,
    );

    employer.company_name = Name.create(employerDto.company_name);
    employer.address = address;
    employer.special_requirements = SpecialRequirement.create(
      employerDto.special_requirements,
    );

    return plainToClass(
      UpdatedEmployerDto,
      this._employerRepository.updateEmployer(employerId, employer),
    );
  }

  async createEmployer(
    employerDto: DataEmployerDto,
    userId: number,
  ): Promise<CreatedEmployerDto> {
    if (!employerDto) {
      throw new BadRequestException('employer data must be sent');
    }

    if (!userId) {
      throw new BadRequestException('employer data must be sent');
    }

    const employer: Employer = new Employer();

    const address: Address = this._mapperAddress.toDomainFromShowDto(
      employerDto.address,
    );

    employer.company_name = Name.create(employerDto.company_name);
    employer.address = address;

    if (employerDto.special_requirements !== null) {
      employer.special_requirements = SpecialRequirement.create(
        employerDto.special_requirements,
      );
    } else {
      employer.special_requirements = SpecialRequirement.create('N/A');
    }
    const savedEmployer: Employer =
      await this._employerRepository.createEmployer(employer, userId);

    return plainToClass(CreatedEmployerDto, savedEmployer);
  }
}
