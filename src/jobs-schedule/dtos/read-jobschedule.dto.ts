import { Exclude, Expose, Transform } from 'class-transformer';
import { IsDate } from 'class-validator';
import { Schedule } from '../domain/value-objects/schedule.vo';

@Exclude()
export class ReadJobScheduleDto {
  @Expose()
  @IsDate()
  @Transform(({ value }) => value.props)
  readonly dates: Schedule;
}
