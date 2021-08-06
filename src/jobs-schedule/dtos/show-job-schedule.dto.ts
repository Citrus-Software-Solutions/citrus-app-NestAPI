import { Exclude, Expose, Transform } from 'class-transformer';
import { IsDate } from 'class-validator';

@Exclude()
export class ShowJobScheduleDto {
  @Expose()
  @IsDate()
  @Transform(({ value }) => value.props.value)
  readonly init_date: string;

  @Expose()
  @IsDate()
  @Transform(({ value }) => value.props.value)
  readonly end_date: string;
}
