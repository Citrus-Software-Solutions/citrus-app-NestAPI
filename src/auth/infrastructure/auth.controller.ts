import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatedEmployerDto } from '../../employers/dtos/created-employer.dto';
import { IAuthService } from '../application/auth.service.interface';
import { SigninDto } from '../dtos/signin.dto';
import { SignupDto } from '../dtos/signup.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AuthService')
    private readonly _authService: IAuthService,
  ) {}

  @Post('/signin')
  @ApiOperation({ summary: 'Iniciar sesión' })
  login(@Body() signinDto: SigninDto) {
    return this._authService.signin(signinDto);
  }

  @Post('/signup/employer')
  @ApiOperation({ summary: 'Registrar un employer' })
  signup(@Body() signupDto: Partial<SignupDto>): Promise<CreatedEmployerDto> {
    return this._authService.signUpEmployer(signupDto);
  }
}
