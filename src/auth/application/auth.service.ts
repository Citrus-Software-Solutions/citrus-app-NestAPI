import { Inject, Injectable } from '@nestjs/common';
import { SigninDto } from '../dtos/signin.dto';
import { IAuthRepository } from './auth.repository.interface';
import { IAuthService } from './auth.service.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject('AuthRepository')
    private readonly _userRepository: IAuthRepository,
  ) {}

  async signin(signinDto: SigninDto): Promise<{ token: string }> {
    const user = await this._userRepository.signin(signinDto);
    return user;
  }
}
