import {
  //   Body,
  Controller,
  //   Delete,
  Get,
  Inject,
  //   Param,
  //   Patch,
  //   Post,
} from '@nestjs/common';
import { Employer } from '../domain/employer.model';
import { IEmployersService } from '../application/employers.service.interface';
import { EmployerEntity } from '../entities/employers.entity';

@Controller('employers')
export class EmployersController {
  constructor(
    @Inject('EmployersService')
    private readonly _employersService: IEmployersService,
  ) {}

  //   @Post()
  //   addEmployer(
  //     @Body('name') companyName: string,
  //     @Body('status') status: number,
  //   ): any {
  //     this.employersService.createEmployer(companyName, status);
  //   }

  @Get('all')
  getAllEmployers(): Promise<EmployerEntity[]> {
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
