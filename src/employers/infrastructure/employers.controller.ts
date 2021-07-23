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
import { CreateEmployerDto } from '../dtos/create-employer.dto';
import { ReadEmployerDto } from '../dtos/read-employer.dto';

@ApiTags('Employers')
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
  @ApiOperation({ summary: 'Get an employer given an ID number' })
  getEmployerById(
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<ReadEmployerDto> {
    return this._employersService.getEmployerById(employerId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new employer' })
  createEmployer(@Body() employer: CreateEmployerDto): Promise<number> {
    return this._employersService.createEmployer(employer);
  }
}
