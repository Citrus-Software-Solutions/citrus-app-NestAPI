import { Exclude, Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { JobOfferStatusDTO } from './job-offer-status.dto';

@Exclude()
export class CreatedJobOfferDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsNumber()
  readonly status: JobOfferStatusDTO;
}
