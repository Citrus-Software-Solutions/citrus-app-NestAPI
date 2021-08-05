import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { SpecialRequirement } from '../../job-offers/domain/value-objects/special-requirement.vo';
import { Name } from '../../shared/domain/name.vo';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';

@Exclude()
export class DataEmployerDto {
  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly company_name: Name;

  @Expose()
  @ValidateNested()
  @Type(() => ReadAddressDto)
  readonly address: ReadAddressDto;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly special_requirements: SpecialRequirement;
}
