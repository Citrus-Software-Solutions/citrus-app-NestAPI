import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IEmployersService } from '../../employers/application/employers.service.interface';
import { IUserService } from '../../user/application/user.service.interface';
import { CreatedUserDto } from '../../user/dtos/created-user.dto';
import { User } from '../../user/domain/user.model';
import { SigninDto } from '../dtos';
import { IAuthRepository } from './auth.repository.interface';
import { IAuthService } from './auth.service.interface';
import { SignupDto } from '../dtos';
import { CreatedEmployerDto } from '../../employers/dtos/created-employer.dto';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject('AuthRepository')
    private readonly _userRepository: IAuthRepository,
    @Inject('EmployersService')
    private readonly _employersService: IEmployersService,
    @Inject('UserService')
    private readonly _userService: IUserService,
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

  async signUpEmployer(signupDto: SignupDto): Promise<CreatedEmployerDto> {
    const user: CreatedUserDto = await this._userService.createUser(
      signupDto.data_user,
      'EMPLOYER',
    );

    return await this._employersService.createEmployer(
      signupDto.data_employer,
      user.id,
    );
  }
}
