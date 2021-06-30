import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { EmployersService } from './application/employers.service';
import { EmployerEntity } from './entities/employers.entity';
//import { EmployersController } from './infrastructure/employers.controller';

@Module({
  //controllers: [EmployersController],
  // providers: [
  //   {
  //     provide: 'IEmployersService',
  //     useClass: EmployersService,
  //   },
  // ],
  imports: [TypeOrmModule.forFeature([EmployerEntity])],
})
export class EmployersModule {}
