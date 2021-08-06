import { CreatedEmployerDto } from '../../employers/dtos/created-employer.dto';
import { SignupDto } from '../dtos';
import { SigninDto } from '../dtos/signin.dto';

export interface IAuthService {
  signin(signinDto: SigninDto): Promise<{ token: string }>;
  signUpEmployer(signupDto: SignupDto): Promise<CreatedEmployerDto>;
}
