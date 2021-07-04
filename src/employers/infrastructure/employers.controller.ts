import { Controller, Get, Inject } from '@nestjs/common';
import { IEmployersService } from '../application/employers.service.interface';
import { ReadEmployerDto } from '../dtos/read-employer.dto';

@Controller('employers')
export class EmployersController {
  constructor(
    @Inject('EmployersService')
    private readonly _employersService: IEmployersService,
  ) {}

  @Get()
  getAllEmployers(): Promise<ReadEmployerDto[]> {
    return this._employersService.getEmployers();
  }
}
