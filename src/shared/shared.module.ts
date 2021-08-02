import { Module } from '@nestjs/common';
import { ApplicationDataMapper } from './mappers/application/application.data-mapper';
import { EmployeeDataMapper } from './mappers/employee/employee.data-mapper';
import { EmployerDataMapper } from './mappers/employer/employer.mapper';
import { JobOfferDataMapper } from './mappers/job-offers/job-offers.mapper';
import { StaffMemberDataMapper } from './mappers/staff-member/staff-member.mapper';

@Module({
  exports: [
    EmployerDataMapper,
    JobOfferDataMapper,
    EmployeeDataMapper,
    ApplicationDataMapper,
    StaffMemberDataMapper,
  ],
  providers: [
    EmployerDataMapper,
    JobOfferDataMapper,
    EmployeeDataMapper,
    ApplicationDataMapper,
    StaffMemberDataMapper,
  ],
})
export class SharedModule {}
