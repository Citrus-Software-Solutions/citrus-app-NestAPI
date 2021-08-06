import { CreatedEmployeeDto } from '../../employee/dtos/created-employee.dto';
import { CreatedEmployerDto } from '../../employers/dtos/created-employer.dto';
import { SignupDto } from '../dtos';
import { LoggedInDto } from '../dtos/loggedin.dto';
import { SigninDto } from '../dtos/signin.dto';
import { SignupEmployeeDto } from '../dtos/signup-employee.dto';

export interface IAuthService {
  signin(signinDto: SigninDto): Promise<LoggedInDto>;
  signUpEmployer(signupDto: Partial<SignupDto>): Promise<CreatedEmployerDto>;
  signUpEmployee(
    signupDto: Partial<SignupEmployeeDto>,
  ): Promise<CreatedEmployeeDto>;
}
