import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployersPersisteceAdapter } from '../employers/infrastructure/employers.persistence.adapter';
import { AddressPersistenceAdapter } from '../shared/address/infraestructure/address.persistence.adapter';
import { SharedModule } from '../shared/shared.module';
import { JobOfferRepository } from './application/job-offers.repository';
import { JobOfferService } from './application/job-offers.service';
import { AddressPersistenceAdapter } from '../shared/address/infraestructure/address.persistence.adapter';
import { EmployeePersistenceAdapter } from '../employee/infrastructure/employee.persistence.adapter';
import { JobOffersController } from './infrastructure/job-offers.controller';
import { JobOfferPersistenceAdapter } from './infrastructure/job-offers.persistence.adapter';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      JobOfferPersistenceAdapter,
      EmployersPersisteceAdapter,
      AddressPersistenceAdapter,
      EmployeePersistenceAdapter,
    ]),
    SharedModule,
  ],
  providers: [JobOfferService, JobOfferPersistenceAdapter, JobOfferRepository],
  controllers: [JobOffersController],
})
export class JobOffersModule {}
