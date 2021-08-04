import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from '../../../user/entities/user.entity';
import { getRepository } from 'typeorm';
import { IAuthPersistence } from '../auth.persistence.interface';
import { IJwtPayload } from '../jwt-payload.interface';
import { AuthPersistenceAdapter } from '../../infrastructure/auth.persistence.adapter';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _authPersistence: AuthPersistenceAdapter) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  async validate(payload: IJwtPayload) {
    const { username } = payload;
    const userRepository = getRepository(UserEntity);
    const user: UserEntity = await userRepository.findOne({
      where: { username },
    });
    if (!user) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
