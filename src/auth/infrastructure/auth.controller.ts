import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatedEmployeeDto } from '../../employee/dtos/created-employee.dto';
import { CreatedEmployerDto } from '../../employers/dtos/created-employer.dto';
import { IAuthService } from '../application/auth.service.interface';
import { LoggedInDto } from '../dtos/loggedin.dto';
import { SigninDto } from '../dtos/signin.dto';
import { SignupEmployeeDto } from '../dtos/signup-employee.dto';
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
  login(@Body() signinDto: SigninDto): Promise<LoggedInDto> {
    return this._authService.signin(signinDto);
  }

  @Post('/signup/employer')
  @ApiOperation({ summary: 'Registrar un employer' })
  signup(@Body() signupDto: SignupDto): Promise<CreatedEmployerDto> {
    return this._authService.signUpEmployer(signupDto);
  }

  @Post('/signup/employee')
  @ApiOperation({ summary: 'Registrar un employee' })
  signupEmployee(
    @Body() signupDtoEmployee: SignupEmployeeDto,
  ): Promise<CreatedEmployeeDto> {
    return this._authService.signUpEmployee(signupDtoEmployee);
  }
}
