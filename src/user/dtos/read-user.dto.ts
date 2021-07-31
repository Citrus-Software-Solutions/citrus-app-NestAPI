import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class ReadUserDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly username: string;

  @Expose()
  @IsString()
  readonly email: string;
}
