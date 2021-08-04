import { Exclude, Expose, Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { ID } from '../../shared/domain/id.vo';
import { JobTitle } from '../../shared/domain/job-title.vo';
import { Name } from '../../shared/domain/name.vo';

@Exclude()
export class ReadStaffMemberDto {
  @Expose()
  @IsNumber()
  @Transform(({ value }) => value.props.value)
  readonly id: ID;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly first_name: Name;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly middle_name: Name;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly last_name: Name;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly title: JobTitle;
}
