import {
  //   Body,
  Controller,
  //   Delete,
  Get,
  HttpStatus,
  Inject,
  Res,
  //   Param,
  //   Patch,
  //   Post,
} from '@nestjs/common';
import { Employer } from '../domain/employer.model';
import { IEmployersService } from '../application/employers.service.interface';
import { ReadEmployerDto } from '../dtos/read-employer.dto';

@Controller('employers')
export class EmployersController {
  constructor(
    @Inject('IEmployersService')
    private readonly _employersService: IEmployersService,
  ) {}

  //   @Post()
  //   addEmployer(
  //     @Body('name') companyName: string,
  //     @Body('status') status: number,
  //   ): any {
  //     this.employersService.createEmployer(companyName, status);
  //   }

  @Get()
  getAllEmployers(): Promise<ReadEmployerDto[]> {
    return this._employersService.getEmployers();
  }

  //   @Get(':name')
  //   getEmployer(@Param('name') companyName: string) {
  //     return this.employersService.getSingleEmployer(companyName);
  //   }

  //   @Patch(':name')
  //   updateEmployer(
  //     @Param('name') actualCompanyName: string,
  //     @Body('name') newCompanyName: string,
  //     @Body('status') status: number,
  //   ) {
  //     this.employersService.updateEmployer(
  //       actualCompanyName,
  //       newCompanyName,
  //       status,
  //     );
  //     return null;
  //   }

  //   @Delete(':name')
  //   removeEmployer(@Param('name') companyName: string) {
  //     this.employersService.deleteEmployer(companyName);
  //     return null;
  //   }
}
