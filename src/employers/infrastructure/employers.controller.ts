import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { IEmployersService } from '../application/employers.service.interface';
import { CreatedEmployerDto } from '../dtos/created-employer.dto';
import { DataEmployerDto } from '../dtos/data-employer.dto';
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

  // @Post('/:userId')
  // @ApiOperation({ summary: 'Create an employer' })
  // createEmployer(
  //   @Param('userId', ParseIntPipe) userId: number,
  //   @Body() employer: Partial<DataEmployerDto>,
  // ): Promise<CreatedEmployerDto> {
  //   return this._employersService.createEmployer(employer, userId);
  // }
}
