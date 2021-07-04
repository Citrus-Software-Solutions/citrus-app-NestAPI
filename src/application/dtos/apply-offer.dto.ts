import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';

@Exclude()
export class ApplyOfferDto {
  @Expose()
  @IsNumber()
  readonly employeeId: number;

  @Expose()
  @IsNumber()
  readonly offerId: number;

  @Expose()
  @IsDate()
  readonly date_application: Date;
}
