import { Exclude, Expose, Transform } from 'class-transformer';
import { IsString } from 'class-validator';
import { Name } from '../../shared/domain/name.vo';
import { JobTitle } from '../../shared/domain/job-title.vo';

@Exclude()
export class ReadContactInformationDto {
  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly full_name: Name;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly job_title: JobTitle;

  @Expose()
  @IsString()
  readonly phone_number: string;

  @Expose()
  @IsString()
  readonly email: string;
}
