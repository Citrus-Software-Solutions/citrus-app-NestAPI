import { Exclude, Expose, Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { JobTitle } from '../../shared/domain/job-title.vo';
import { CompanyName } from '../domain/value-objects/company-name.vo';

@Exclude()
export class ReadWorkExperienceDto {
  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly job_title: JobTitle;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly company_name: CompanyName;

  @Expose()
  @IsNumber()
  readonly category: number;
}
