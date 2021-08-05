import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeePersistenceAdapter } from '../employee/infrastructure/employee.persistence.adapter';
import { JobOfferPersistenceAdapter } from '../job-offers/infrastructure/job-offers.persistence.adapter';
import { SharedModule } from '../shared/shared.module';
import { ApplicationRepository } from './application/application.repository';
import { ApplicationService } from './application/application.service';
import { ApplicationController } from './infrastructure/application.controller';
import { ApplicationEntityRepository } from './infrastructure/application.entity.repository';
import { ApplicationPersistenceAdapter } from './infrastructure/application.persistence.adapter';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ApplicationEntityRepository,
      JobOfferPersistenceAdapter,
      EmployeePersistenceAdapter,
    ]),
    SharedModule,
  ],
  providers: [
    ApplicationService,
    ApplicationRepository,
    ApplicationPersistenceAdapter,
  ],
  controllers: [ApplicationController],
})
export class ApplicationModule {}
