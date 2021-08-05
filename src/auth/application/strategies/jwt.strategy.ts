import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthPersistenceAdapter } from '../../infrastructure/auth.persistence.adapter';
import { IJwtPayload } from '../jwt-payload.interface';

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
    const user = await this._authPersistence.findOne({ where: { username } });
    if (!user) {
      throw new UnauthorizedException();
    }
    return payload;
  }
}
