import { Exclude, Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

@Exclude()
export class AlreadyAppliedOfferDto {
  @Expose()
  @IsNumber()
  readonly employeeId: number;

  @Expose()
  @IsNumber()
  readonly offerId: number;
}
