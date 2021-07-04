import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { EmployeeService } from './application/employee.service';
import { EmployeeController } from './infrastructure/employee.controller';
import { EmployeeEntityRepository } from './infrastructure/employee.entity.repository';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports: [TypeOrmModule.forFeature([EmployeeEntityRepository]), SharedModule],
})
export class EmployeeModule {}
