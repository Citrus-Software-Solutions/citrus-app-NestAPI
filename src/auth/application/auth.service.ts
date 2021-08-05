import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { User } from '../../user/domain/user.model';
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
    if (!signinDto) {
      throw new BadRequestException('Information must be sent');
    }

    const user: User = new User();
    user.username = signinDto.username;
    user.password = signinDto.password;

    const token = await this._userRepository.signin(user);

    return token;
  }
}
