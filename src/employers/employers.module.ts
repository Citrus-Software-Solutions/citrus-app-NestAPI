import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { EmployersRepository } from './application/employers.repository';
import { EmployersService } from './application/employers.service';
import { EmployersController } from './infrastructure/employers.controller';
import { EmployersPersisteceAdapter } from './infrastructure/employers.persistence.adapter';

@Module({
  controllers: [EmployersController],
  providers: [
    EmployersService,
    EmployersPersisteceAdapter,
    EmployersRepository,
  ],
  imports: [
    TypeOrmModule.forFeature([EmployersPersisteceAdapter]),
    SharedModule,
  ],
  exports: [EmployersPersisteceAdapter],
})
export class EmployersModule {}
