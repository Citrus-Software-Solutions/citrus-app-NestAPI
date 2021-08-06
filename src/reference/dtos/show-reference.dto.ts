import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

@Exclude()
export class ShowReferenceDto {
  @Expose()
  @IsString()
  readonly full_name: string;

  @Expose()
  @IsString()
  readonly job_title: string;

  @Expose()
  @IsString()
  readonly company_name: string;

  @Expose()
  @IsString()
  readonly phone_number: string;

  @Expose()
  @IsEmail()
  readonly email: string;
}
