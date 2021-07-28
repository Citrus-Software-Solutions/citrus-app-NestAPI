import { Module } from '@nestjs/common';
import { UserPersistenceAdapter } from './infrastructure/user.persistence.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UserPersistenceAdapter],
  imports: [TypeOrmModule.forFeature([UserPersistenceAdapter])],
  exports: [UserPersistenceAdapter],
})
export class UserModule {}
