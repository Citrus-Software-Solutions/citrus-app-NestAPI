import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { RolePersistenceAdapter } from 'src/role/infrastructure/role.persistence.adapter';
import { SharedModule } from '../shared/shared.module';
import { UserRepository } from './application/user.repository';
import { UserService } from './application/user.service';
import { UserController } from './infrastructure/user.controller';
import { UserPersistenceAdapter } from './infrastructure/user.persistence.adapter';

@Module({
  controllers: [UserController],

  providers: [UserPersistenceAdapter, UserRepository, UserService],

  imports: [
    TypeOrmModule.forFeature([UserPersistenceAdapter, RolePersistenceAdapter]),
    SharedModule,
    AuthModule,
  ],
})
export class UserModule {}
