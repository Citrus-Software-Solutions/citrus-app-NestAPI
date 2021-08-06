import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IEmployersService } from '../application/employers.service.interface';
import { ReadEmployerDto } from '../dtos/read-employer.dto';
import { UpdateEmployerDto } from '../dtos/update-employer.dto';

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

  @Get('byuser/:userId')
  @ApiOperation({ summary: 'Get employer data by user id' })
  getByUserId(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<ReadEmployerDto> {
    return this._employersService.getEmployerByUserId(userId);
  }

  @Patch(':employerId')
  @ApiOperation({ summary: 'Update an employer' })
  updateUser(
    @Param('employerId', ParseIntPipe) employerId: number,
    @Body() employer: UpdateEmployerDto,
  ) {
    return this._employersService.updateEmployer(employerId, employer);
  }

  // @Post('/:userId')
  // @ApiOperation({ summary: 'Create an employer' })
  // createEmployer(
  //   @Param('userId', ParseIntPipe) userId: number,
  //   @Body() employer: DataEmployerDto,
  // ): Promise<CreatedEmployerDto> {
  //   return this._employersService.createEmployer(employer, userId);
  // }
}
