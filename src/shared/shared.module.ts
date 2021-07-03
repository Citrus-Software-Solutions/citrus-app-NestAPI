import { Module } from '@nestjs/common';
import { EmployerDataMapper } from './mappers/employer/employer.mapper';
import { JobOfferDataMapper } from './mappers/job-offers/job-offers.mapper';

@Module({
  exports: [EmployerDataMapper, JobOfferDataMapper],
  providers: [EmployerDataMapper, JobOfferDataMapper],
  imports: [EmployerDataMapper],
})
export class SharedModule {}
