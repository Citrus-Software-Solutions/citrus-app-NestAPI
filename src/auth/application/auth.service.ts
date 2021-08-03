import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { UserEntity } from '../../user/entities/user.entity';
import { SigninDto } from '../dtos/signin.dto';
import { AuthPersistenceAdapter } from '../infrastructure/auth.persistence.adapter';
import { IAuthPersistence } from './auth.persistence.interface';
import { IAuthService } from './auth.service.interface';
import { IJwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject('AuthPersistenceAdapter')
    private readonly _authPersistence: IAuthPersistence,
    private readonly _jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto): Promise<{ token: string }> {
    const user = await this._authPersistence.signin(signinDto);
    return user;
  }
}
