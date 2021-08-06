import { Exclude, Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

@Exclude()
export class WriteAddressDto {
  @Expose()
  @IsString()
  readonly street1: string;

  @Expose()
  @IsString()
  @IsOptional()
  readonly street2: string;

  @Expose()
  @IsString()
  readonly city: string;

  @Expose()
  @IsString()
  readonly state: string;

  @Expose()
  @IsString()
  readonly zip: string;
}
