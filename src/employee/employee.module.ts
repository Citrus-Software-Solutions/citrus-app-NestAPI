import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRepository } from './application/employee.repository';
import { EmployeeService } from './application/employee.service';
import { EmployeeController } from './infrastructure/employee.controller';
import { EmployeeEntityRepository } from './infrastructure/employee.entity.repository';
import { EmployeePersistenceAdapter } from './infrastructure/employee.persistence.adapter';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeePersistenceAdapter, EmployeeRepository],
  imports: [TypeOrmModule.forFeature([EmployeeEntityRepository]), SharedModule],
})
export class EmployeeModule {}
