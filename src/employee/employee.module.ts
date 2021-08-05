import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPersistenceAdapter } from '../user/infrastructure/user.persistence.adapter';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRepository } from './application/employee.repository';
import { EmployeeService } from './application/employee.service';
import { EmployeeController } from './infrastructure/employee.controller';
import { EmployeePersistenceAdapter } from './infrastructure/employee.persistence.adapter';
import { AddressPersistenceAdapter } from '../shared/address/infraestructure/address.persistence.adapter';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository, EmployeePersistenceAdapter],
  imports: [
    TypeOrmModule.forFeature([
      EmployeePersistenceAdapter,
      UserPersistenceAdapter,
      AddressPersistenceAdapter,
    ]),
    SharedModule,
  ],
  exports: [EmployeeService],
})
export class EmployeeModule {}
