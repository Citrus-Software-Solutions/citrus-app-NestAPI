import { SigninDto } from '../dtos/signin.dto';

export interface IAuthService {
  signin(signinDto: SigninDto): Promise<{ token: string }>;
}
