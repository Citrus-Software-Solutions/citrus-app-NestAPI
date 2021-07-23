import { Module } from '@nestjs/common';
import { AddressDataMapper } from './mappers/address/address.data-mapper';
import { ApplicationDataMapper } from './mappers/application/application.data-mapper';
import { EmployeeDataMapper } from './mappers/employee/employee.data-mapper';
import { ContactInformationDataMapper } from './mappers/employer/contact-information.mapper';
import { EmployerDataMapper } from './mappers/employer/employer.mapper';
import { JobOfferDataMapper } from './mappers/job-offers/job-offers.mapper';
import { SkillDataMapper } from './mappers/skill/skill.data-mapper';

@Module({
  exports: [
    EmployerDataMapper,
    JobOfferDataMapper,
    EmployeeDataMapper,
    ApplicationDataMapper,
    ContactInformationDataMapper,
    AddressDataMapper,
    SkillDataMapper,
  ],
  providers: [
    EmployerDataMapper,
    JobOfferDataMapper,
    EmployeeDataMapper,
    ApplicationDataMapper,
    ContactInformationDataMapper,
    AddressDataMapper,
    SkillDataMapper,
  ],
})
export class SharedModule {}
