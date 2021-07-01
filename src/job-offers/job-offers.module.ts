import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployersRepository } from '../employers/infrastructure/employers.repository';
import { SharedModule } from '../shared/shared.module';
import { JobOfferService } from './application/job-offers.service';
import { JobOffersController } from './infrastructure/job-offers.controller';
import { JobOffersRepository } from './infrastructure/job-offers.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobOffersRepository, EmployersRepository]),
    SharedModule,
  ],
  providers: [JobOfferService],
  controllers: [JobOffersController],
})
export class JobOffersModule {}
