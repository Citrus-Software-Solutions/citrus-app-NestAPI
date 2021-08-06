import { CreatedEmployeeDto } from 'src/employee/dtos/created-employee.dto';
import { CreatedEmployerDto } from '../../employers/dtos/created-employer.dto';
import { SignupDto } from '../dtos';
import { SigninDto } from '../dtos/signin.dto';
import { SignupEmployeeDto } from '../dtos/signup-employee.dto';

export interface IAuthService {
  signin(signinDto: SigninDto): Promise<{ token: string }>;
  signUpEmployer(signupDto: Partial<SignupDto>): Promise<CreatedEmployerDto>;
  signUpEmployee(
    signupDto: Partial<SignupEmployeeDto>,
  ): Promise<CreatedEmployeeDto>;
}
