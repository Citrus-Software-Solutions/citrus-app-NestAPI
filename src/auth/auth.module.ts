import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from './application/auth.repository';
import { AuthService } from './application/auth.service';
import { JwtStrategy } from './application/strategies/jwt.strategy';
import { AuthController } from './infrastructure/auth.controller';
import { AuthPersistenceAdapter } from './infrastructure/auth.persistence.adapter';

@Module({
  providers: [AuthPersistenceAdapter, AuthRepository, AuthService, JwtStrategy],
  controllers: [AuthController],

  imports: [
    TypeOrmModule.forFeature([AuthPersistenceAdapter]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: 3600,
          },
        };
      },
    }),
  ],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
