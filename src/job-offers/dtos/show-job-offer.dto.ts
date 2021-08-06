import { Exclude, Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { DataJobOfferDto } from './data-joboffer.dto';

@Exclude()
export class ShowJobOfferDto extends DataJobOfferDto {
  @Expose()
  @IsNumber()
  readonly id: number;
}
