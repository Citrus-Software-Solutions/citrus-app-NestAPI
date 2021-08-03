import { SigninDto } from '../dtos/signin.dto';

export interface IAuthRepository {
  signin(signinDto: SigninDto): Promise<{ token: string }>;
}
