import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class LoggedInDto {
  @Expose()
  @IsString()
  readonly token: string;

  @Expose()
  @IsNumber()
  readonly id: number;
}
