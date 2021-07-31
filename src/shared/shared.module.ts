import { Module } from '@nestjs/common';
import { ApplicationDataMapper } from './mappers/application/application.data-mapper';
import { EmployeeDataMapper } from './mappers/employee/employee.data-mapper';
import { EmployerDataMapper } from './mappers/employer/employer.mapper';
import { JobOfferDataMapper } from './mappers/job-offers/job-offers.mapper';
import { RoleDataMapper } from './mappers/role/role.mapper';
import { UserDataMapper } from './mappers/user/user.mapper';

@Module({
  exports: [
    EmployerDataMapper,
    JobOfferDataMapper,
    EmployeeDataMapper,
    ApplicationDataMapper,
    UserDataMapper,
    RoleDataMapper,
  ],
  providers: [
    EmployerDataMapper,
    JobOfferDataMapper,
    EmployeeDataMapper,
    ApplicationDataMapper,
    UserDataMapper,
    RoleDataMapper,
  ],
})
export class SharedModule {}
