import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPersistenceAdapter } from '../user/infrastructure/user.persistence.adapter';
import { SharedModule } from '../shared/shared.module';
import { EmployersRepository } from './application/employers.repository';
import { EmployersService } from './application/employers.service';
import { EmployersController } from './infrastructure/employers.controller';
import { EmployersPersisteceAdapter } from './infrastructure/employers.persistence.adapter';
import { AddressPersistenceAdapter } from '../shared/address/infraestructure/address.persistence.adapter';

@Module({
  controllers: [EmployersController],
  providers: [
    EmployersService,
    EmployersPersisteceAdapter,
    EmployersRepository,
  ],
  imports: [
    TypeOrmModule.forFeature([
      EmployersPersisteceAdapter,
      UserPersistenceAdapter,
      AddressPersistenceAdapter,
    ]),
    SharedModule,
  ],
  exports: [EmployersPersisteceAdapter],
})
export class EmployersModule {}
