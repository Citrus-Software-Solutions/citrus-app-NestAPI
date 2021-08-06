import { Exclude, Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { CityAddress } from '../domain/value-objects/city-address.vo';
import { StateAddress } from '../domain/value-objects/state-address.vo';
import { StreetAddress } from '../domain/value-objects/street-address.vo';
import { ZipCode } from '../domain/value-objects/zip-code.vo';

@Exclude()
export class ReadAddressDto {
  @Expose()
  @IsString()
  readonly street1: StreetAddress;

  @Expose()
  @IsString()
  @IsOptional()
  readonly street2: StreetAddress;

  @Expose()
  @IsString()
  readonly city: CityAddress;

  @Expose()
  @IsString()
  readonly state: StateAddress;

  @Expose()
  @IsString()
  readonly zip: ZipCode;
}
