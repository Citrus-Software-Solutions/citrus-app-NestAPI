import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { EmployersService } from './application/employers.service';
import { EmployersController } from './infrastructure/employers.controller';
import { EmployersRepository } from './infrastructure/employers.repository';

@Module({
  controllers: [EmployersController],
  providers: [EmployersService],
  imports: [TypeOrmModule.forFeature([EmployersRepository]), SharedModule],
})
export class EmployersModule {}
