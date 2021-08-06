import { Module } from '@nestjs/common';
import { AddressDataMapper } from './mappers/address/address.data-mapper';
import { ApplicationDataMapper } from './mappers/application/application.data-mapper';
import { EmployeeDataMapper } from './mappers/employee/employee.data-mapper';
import { EmployerDataMapper } from './mappers/employer/employer.mapper';
import { JobOfferDataMapper } from './mappers/job-offers/job-offers.mapper';
import { StaffMemberDataMapper } from './mappers/staff-member/staff-member.mapper';
import { RoleDataMapper } from './mappers/role/role.mapper';
import { UserDataMapper } from './mappers/user/user.mapper';
import { JobScheduleDataMapper } from './mappers/jobs-schedule/jobs-schedule.mapper';
import { SkillDataMapper } from './mappers/skill/skill.data-mapper';

@Module({
  exports: [
    EmployerDataMapper,
    JobOfferDataMapper,
    JobScheduleDataMapper,
    EmployeeDataMapper,
    ApplicationDataMapper,
    StaffMemberDataMapper,
    UserDataMapper,
    RoleDataMapper,
    AddressDataMapper,
    SkillDataMapper,
  ],
  providers: [
    EmployerDataMapper,
    JobOfferDataMapper,
    JobScheduleDataMapper,
    EmployeeDataMapper,
    ApplicationDataMapper,
    StaffMemberDataMapper,
    UserDataMapper,
    RoleDataMapper,
    AddressDataMapper,
    SkillDataMapper,
  ],
})
export class SharedModule {}
