import { SigninDto } from '../dtos/signin.dto';
import { IJwtPayload } from './jwt-payload.interface';

export interface IAuthPersistence {
  signin(signinDto: SigninDto): Promise<{ token: string }>;
}
