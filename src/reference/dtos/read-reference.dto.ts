import { Exclude, Expose, Transform } from 'class-transformer';
import { IsString } from 'class-validator';
import { Name } from '../../shared/domain/name.vo';
import { CompanyName } from '../../work-experience/domain/value-objects/company-name.vo';
import { JobTitle } from '../../shared/domain/job-title.vo';

@Exclude()
export class ReadReferenceDto {
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
  @Transform(({ value }) => value.props.value)
  readonly company_name: CompanyName;

  @Expose()
  @IsString()
  readonly phone_number: string;

  @Expose()
  @IsString()
  readonly email: string;
}
