import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

@Exclude()
export class CreateUserDto {
  @Expose()
  @IsString()
  readonly username: string;

  @Expose()
  @IsString()
  readonly password: string;

  @Expose()
  @IsEmail()
  readonly email: string;
}
