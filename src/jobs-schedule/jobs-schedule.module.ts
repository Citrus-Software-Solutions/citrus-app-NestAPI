import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobScheduleEntity } from './entities/jobs-schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobScheduleEntity])],
  providers: [],
  controllers: [],
})
export class JobsScheduleModule {}
