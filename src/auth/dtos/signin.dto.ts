import { IsNotEmpty, IsString } from 'class-validator';
export class SigninDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
