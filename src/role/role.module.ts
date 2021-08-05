import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePersistenceAdapter } from './infrastructure/role.persistence.adapter';

@Module({
  providers: [RolePersistenceAdapter],
  imports: [TypeOrmModule.forFeature([RolePersistenceAdapter])],
  exports: [RolePersistenceAdapter],
})
export class RoleModule {}
