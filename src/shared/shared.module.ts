import { Module } from '@nestjs/common';
import { ApplicationDataMapper } from './mappers/application/application.data-mapper';
import { EmployeeDataMapper } from './mappers/employee/employee.data-mapper';
import { EmployerDataMapper } from './mappers/employer/employer.mapper';
import { JobOfferDataMapper } from './mappers/job-offers/job-offers.mapper';

@Module({
  exports: [
    EmployerDataMapper,
    JobOfferDataMapper,
    EmployeeDataMapper,
    ApplicationDataMapper,
  ],
  providers: [
    EmployerDataMapper,
    JobOfferDataMapper,
    EmployeeDataMapper,
    ApplicationDataMapper,
  ],
})
export class SharedModule {}
