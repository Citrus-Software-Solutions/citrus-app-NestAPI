import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IUserService } from '../application/user.service.interface';
import { User } from '../domain/user.model';
import { DataUserDto } from '../dtos/data-user.dto';
import { ReadUserDto } from '../dtos/read-user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    @Inject('UserService')
    private readonly _userService: IUserService,
  ) {}

  @Get('/:userId')
  @ApiOperation({ summary: 'Get user data by its id' })
  getById(@Param('userId', ParseIntPipe) userId: number): Promise<ReadUserDto> {
    return this._userService.getById(userId);
  }
  @Post('')
  @ApiOperation({ summary: 'Create a user' })
  createUserEmployer(@Body() user: DataUserDto): Promise<User> {
    return this._userService.createUser(user);
  }
}
