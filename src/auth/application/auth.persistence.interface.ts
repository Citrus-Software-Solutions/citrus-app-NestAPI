import { SigninDto } from '../dtos/signin.dto';

export interface IAuthPersistence {
  signin(signinDto: SigninDto): Promise<{ token: string }>;
}
