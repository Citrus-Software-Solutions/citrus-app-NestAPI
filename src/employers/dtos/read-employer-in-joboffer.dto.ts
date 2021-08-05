import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';
import { Name } from '../../shared/domain/name.vo';

@Exclude()
export class ReadEmployerInJobOfferDto {
  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly company_name: Name;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ReadAddressDto)
  readonly address: ReadAddressDto;
}
