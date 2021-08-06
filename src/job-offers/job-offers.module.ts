import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { JobOffersController } from './infrastructure/job-offers.controller';
import { JobOfferPersistenceAdapter } from './infrastructure/job-offers.persistence.adapter';
import { JobOfferRepository } from './application/job-offers.repository';
import { EmployersPersisteceAdapter } from '../employers/infrastructure/employers.persistence.adapter';
import { JobOfferService } from './application/job-offers.service';
import { AddressPersistenceAdapter } from '../shared/address/infraestructure/address.persistence.adapter';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      JobOfferPersistenceAdapter,
      EmployersPersisteceAdapter,
      AddressPersistenceAdapter,
    ]),
    SharedModule,
  ],
  providers: [JobOfferService, JobOfferPersistenceAdapter, JobOfferRepository],
  controllers: [JobOffersController],
})
export class JobOffersModule {}
