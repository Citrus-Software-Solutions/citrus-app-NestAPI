import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { IEmployersService } from '../application/employers.service.interface';
import { ReadEmployerDto } from '../dtos/read-employer.dto';

@ApiTags('employers')
@Controller('employers')
export class EmployersController {
  constructor(
    @Inject('EmployersService')
    private readonly _employersService: IEmployersService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all employers' })
  getAllEmployers(): Promise<ReadEmployerDto[]> {
    return this._employersService.getEmployers();
  }

  @Get('/:employerId')
  @ApiOperation({ summary: 'Get employer data by its id' })
  getById(
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<ReadEmployerDto> {
    return this._employersService.getEmployerById(employerId);
  }
}
