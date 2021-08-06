import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { OptionalAddressDto } from '../../shared/address/dtos/optional-address.dto';
import { ReadJobOfferDto } from './read-joboffert.dto';

@Exclude()
export class UpdatedJobOfferDto extends ReadJobOfferDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => OptionalAddressDto)
  readonly location: OptionalAddressDto;
}
