import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { JobOfferService } from './application/job-offers.service';
import { JobOffersController } from './infrastructure/job-offers.controller';
import { JobOfferPersisteceAdapter } from './infrastructure/job-offers.persistence.adapter';
import { JobOfferRepository } from './application/job-offers.repository';
import { EmployersPersisteceAdapter } from '../employers/infrastructure/employers.persistence.adapter';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      JobOfferPersisteceAdapter,
      EmployersPersisteceAdapter,
    ]),
    SharedModule,
  ],
  providers: [JobOfferService, JobOfferPersisteceAdapter, JobOfferRepository],
  controllers: [JobOffersController],
})
export class JobOffersModule {}
