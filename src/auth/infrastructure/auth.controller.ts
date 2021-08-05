import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IAuthService } from '../application/auth.service.interface';
import { SigninDto } from '../dtos/signin.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AuthService')
    private readonly _authService: IAuthService,
  ) {}

  @Post('/signin')
  @ApiOperation({ summary: 'Create a user' })
  login(@Body() signinDto: SigninDto) {
    return this._authService.signin(signinDto);
  }
}