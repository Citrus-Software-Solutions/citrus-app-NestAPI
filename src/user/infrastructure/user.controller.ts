import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IUserService } from '../application/user.service.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { CreatedUserDto } from '../dtos/created-user.dto';
import { ReadUserDto } from '../dtos/read-user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    @Inject('UserService')
    private readonly _userService: IUserService,
  ) {}

  @UseGuards(AuthGuard())
  @Get('/:userId')
  @ApiOperation({ summary: 'Get user data by its id' })
  getById(@Param('userId', ParseIntPipe) userId: number): Promise<ReadUserDto> {
    return this._userService.getById(userId);
  }

  @Post('/:userRole')
  @ApiOperation({ summary: 'Create a user' })
  createUser(
    @Param('userRole') userRole: string,
    @Body() user: CreateUserDto,
  ): Promise<CreatedUserDto> {
    return this._userService.createUser(user, userRole);
  }
}
