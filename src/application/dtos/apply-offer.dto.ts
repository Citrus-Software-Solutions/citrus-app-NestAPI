import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class ApplyOfferDto {
  @Expose()
  @IsNumber()
  readonly employeeId: number;

  @Expose()
  @IsNumber()
  readonly offerId: number;

  @Expose()
  @IsString()
  readonly applicationDate: string;
}
