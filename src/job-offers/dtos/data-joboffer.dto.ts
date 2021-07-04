import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class DataJobOfferDto {
  @Expose()
  @IsString()
  readonly name: string;

  @Expose()
  @IsString()
  readonly description: string;

  @Expose()
  @IsNumber()
  readonly availableVacans: number;

  @Expose()
  @IsString()
  readonly dateBegin: string;

  @Expose()
  @IsString()
  readonly dateEnd: string;

  @Expose()
  @IsString()
  readonly status: string;

  @Expose()
  @IsString()
  readonly gender: string;

  @Expose()
  @IsNumber()
  readonly salary: number;

  @Expose()
  @IsNumber()
  readonly minAge?: number;

  @Expose()
  @IsNumber()
  readonly maxAge?: number;
}
