import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';

@Exclude()
export class UpdateEmployerDto {
  @Expose()
  @IsOptional()
  @IsString()
  readonly company_name: string;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ReadAddressDto)
  readonly address: ReadAddressDto;

  @Expose()
  @IsOptional()
  @IsString()
  readonly special_requirements: string;
}
