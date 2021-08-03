import { Inject, Injectable } from '@nestjs/common';
import { SigninDto } from '../dtos/signin.dto';
import { IAuthPersistence } from './auth.persistence.interface';
import { IAuthRepository } from './auth.repository.interface';

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(
    @Inject('AuthPersistenceAdapter')
    private readonly _authPersistence: IAuthPersistence,
  ) {}
  async signin(signinDto: SigninDto): Promise<{ token: string }> {
    const user = await this._authPersistence.signin(signinDto);
    return user;
  }
}
