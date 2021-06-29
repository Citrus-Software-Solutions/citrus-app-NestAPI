import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { SharedModule } from '../shared/shared.module';
import { GetAllJobOffers } from './application/get-all-job-offers.service';
import { JobOffersController } from './infrastructure/job-offers.controller';
import { JobOffersRepository } from './infrastructure/job-offers.repository';

@Module({
  // imports: [TypeOrmModule.forFeature([JobOffersRepository]), SharedModule],
  imports: [TypeOrmModule.forFeature([JobOffersRepository])],
  providers: [GetAllJobOffers],
  controllers: [JobOffersController],
})
export class JobOffersModule {}
