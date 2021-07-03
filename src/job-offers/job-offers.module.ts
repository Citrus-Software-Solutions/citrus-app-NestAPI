import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { JobOffersController } from './infrastructure/job-offers.controller';
import { JobOfferPersisteceAdapter } from '../job-offers/infrastructure/job-offers.persistence.adapter';
import { JobOfferRepository } from '../job-offers/application/job-offers.repository';
import { EmployersPersisteceAdapter } from '../employers/infrastructure/employers.persistence.adapter';
import { JobOfferService } from './application/job-offers.service';
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
