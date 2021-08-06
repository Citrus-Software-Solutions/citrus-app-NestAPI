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
import { SignupEmployeeDto } from '../dtos/signup-employee.dto';
import { CreatedEmployeeDto } from '../../employee/dtos/created-employee.dto';
import { IEmployeeService } from '../../employee/application/employee.service.interface';
import { plainToClass } from 'class-transformer';
import { LoggedInDto } from '../dtos/loggedin.dto';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject('AuthRepository')
    private readonly _userRepository: IAuthRepository,
    @Inject('EmployersService')
    private readonly _employersService: IEmployersService,
    @Inject('UserService')
    private readonly _userService: IUserService,
    @Inject('EmployeeService')
    private readonly _employeesService: IEmployeeService,
  ) {}

  async signin(signinDto: SigninDto): Promise<LoggedInDto> {
    if (!signinDto) {
      throw new BadRequestException('Information must be sent');
    }

    const user: User = new User();
    user.username = signinDto.username;
    user.password = signinDto.password;

    const token = await this._userRepository.signin(user);

    return plainToClass(LoggedInDto, token);
  }

  async signUpEmployer(
    signupDto: Partial<SignupDto>,
  ): Promise<CreatedEmployerDto> {
    const user: CreatedUserDto = await this._userService.createUser(
      signupDto.data_user,
      'EMPLOYER',
    );

    return await this._employersService.createEmployer(
      signupDto.data_employer,
      user.id,
    );
  }

  async signUpEmployee(
    signupDto: Partial<SignupEmployeeDto>,
  ): Promise<CreatedEmployeeDto> {
    const user: CreatedUserDto = await this._userService.createUser(
      signupDto.data_user,
      'EMPLOYEE',
    );

    return await this._employeesService.createEmployee(
      signupDto.data_employee,
      user.id,
    );
  }
}
