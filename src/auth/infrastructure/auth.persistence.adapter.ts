import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { IAuthPersistence } from '../application/auth.persistence.interface';
import { IJwtPayload } from '../application/jwt-payload.interface';
import { SigninDto } from '../dtos/signin.dto';

@EntityRepository(UserEntity)
@Injectable()
export class AuthPersistenceAdapter
  extends Repository<UserEntity>
  implements IAuthPersistence
{
  constructor(private readonly _jwtService: JwtService) {
    super();
  }
  async signin(signinDto: SigninDto): Promise<{ token: string }> {
    const { username, password } = signinDto;
    const userRepository = getRepository(UserEntity);
    const user: UserEntity = await userRepository.findOne({
      where: { username },
    });
    if (!user) {
      throw new NotFoundException('user does not exist');
    }
    console.log(password, user.password);
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('invalid credentials');
    }
    const payload: IJwtPayload = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };
    const token = await this._jwtService.sign(payload);
    return { token };
  }
}
