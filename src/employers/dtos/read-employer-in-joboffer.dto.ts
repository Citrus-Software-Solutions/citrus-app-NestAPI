import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { WriteAddressDto } from 'src/shared/address/dtos/write-address.dto';
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
  @Type(() => WriteAddressDto)
  readonly address: WriteAddressDto;
}
