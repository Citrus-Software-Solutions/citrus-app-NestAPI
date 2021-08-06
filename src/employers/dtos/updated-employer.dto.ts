import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { SpecialRequirement } from '../../job-offers/domain/value-objects/special-requirement.vo';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';
import { Name } from '../../shared/domain/name.vo';

@Exclude()
export class UpdatedEmployerDto {
  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly company_name: Name;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ReadAddressDto)
  readonly address: ReadAddressDto;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly special_requirements: SpecialRequirement;
}
