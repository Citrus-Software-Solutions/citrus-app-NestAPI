import { Module } from '@nestjs/common';
import { EmployersService } from './application/employers.service';
import { EmployersController } from './infrastructure/employers.controller';

@Module({
  controllers: [EmployersController],
  providers: [
    {
      provide: 'IEmployersService',
      useClass: EmployersService,
    },
  ],
})
export class EmployersModule {}
