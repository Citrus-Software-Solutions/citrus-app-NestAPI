import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRepository } from './application/employee.repository';
import { EmployeeService } from './application/employee.service';
import { EmployeeController } from './infrastructure/employee.controller';
import { EmployeePersistenceAdapter } from './infrastructure/employee.persistence.adapter';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeePersistenceAdapter, EmployeeRepository],
  imports: [SharedModule],
})
export class EmployeeModule {}
