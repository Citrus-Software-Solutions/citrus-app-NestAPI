import { Exclude, Expose, Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { CityAddress } from '../domain/value-objects/city-address.vo';
import { StateAddress } from '../domain/value-objects/state-address.vo';
import { StreetAddress } from '../domain/value-objects/street-address.vo';
import { ZipCode } from '../domain/value-objects/zip-code.vo';

@Exclude()
export class ReadAddressDto {
  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly street1: StreetAddress;

  @Expose()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.props.value)
  readonly street2: StreetAddress;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly city: CityAddress;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly state: StateAddress;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly zip: ZipCode;
}
