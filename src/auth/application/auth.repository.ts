import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IAuthRepository } from './auth.repository.interface';

@Injectable()
export class AuthRepository implements IAuthRepository {}
