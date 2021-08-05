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

@EntityRepository(UserEntity)
@Injectable()
export class AuthPersistenceAdapter
  extends Repository<UserEntity>
  implements IAuthPersistence
{
  constructor(private readonly _jwtService: JwtService) {
    super();
  }
  async signin(userEntity: UserEntity): Promise<{ token: string }> {
    const userRepository = getRepository(UserEntity);

    const user: UserEntity = await userRepository.findOne({
      where: { username: userEntity.username },
    });
    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    const isMatch = await compare(userEntity.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: IJwtPayload = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };
    const token = this._jwtService.sign(payload);

    return { token };
  }
}
