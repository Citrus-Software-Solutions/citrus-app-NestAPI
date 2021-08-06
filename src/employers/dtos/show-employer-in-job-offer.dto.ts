import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { WriteAddressDto } from '../../shared/address/dtos/write-address.dto';

@Exclude()
export class ShowEmployerInJobOfferDto {
  @Expose()
  @IsString()
  readonly company_name: string;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => WriteAddressDto)
  readonly address: WriteAddressDto;
}
