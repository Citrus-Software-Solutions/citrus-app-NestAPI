import { Exclude, Expose } from 'class-transformer';
import { IsDate } from 'class-validator';

@Exclude()
export class ShowJobScheduleDto {
  @Expose()
  @IsDate()
  readonly init_date: string;

  @Expose()
  @IsDate()
  readonly end_date: string;
}
