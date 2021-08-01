import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class DataUserDto {
  @Expose()
  @IsString()
  readonly username: string;
  @Expose()
  @IsString()
  readonly password: string;

  @Expose()
  @IsString()
  readonly email: string;
}
