import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { StaffMemberRepository } from './application/staff-member.repository';
import { StaffMemberService } from './application/staff-member.service';
import { StaffMemberController } from './infrastructure/staff-member.controller';
import { StaffMemberPersistenceAdapter } from './infrastructure/staff-member.persistence.adapter';

@Module({
  controllers: [StaffMemberController],
  providers: [
    StaffMemberService,
    StaffMemberPersistenceAdapter,
    StaffMemberRepository,
  ],
  imports: [
    TypeOrmModule.forFeature([StaffMemberPersistenceAdapter]),
    SharedModule,
  ],
  exports: [StaffMemberPersistenceAdapter],
})
export class StaffMemberModule {}
