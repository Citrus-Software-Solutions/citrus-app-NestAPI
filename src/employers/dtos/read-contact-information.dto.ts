import { Exclude, Expose, Transform } from 'class-transformer';
import { IsString } from 'class-validator';
import { EmailAddress } from '../domain/value-objects/email-address.vo';
import { FullName } from '../domain/value-objects/full-name.vo';
import { JobTitle } from '../domain/value-objects/job-title.vo';
import { PhoneNumber } from '../domain/value-objects/phone-number.vo';

@Exclude()
export class ReadContactInformationDto {
  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly full_name: FullName;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly job_title: JobTitle;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly phone: PhoneNumber;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly email: EmailAddress;
}
