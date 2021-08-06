import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { SpecialRequirement } from '../../job-offers/domain/value-objects/special-requirement.vo';
import { WriteAddressDto } from '../../shared/address/dtos/write-address.dto';
import { ID } from '../../shared/domain/id.vo';
import { Name } from '../../shared/domain/name.vo';
import { CreatedUserDto } from '../../user/dtos/created-user.dto';

@Exclude()
export class CreatedEmployerDto {
  @Expose()
  @IsNumber()
  @Transform(({ value }) => value.props.value)
  readonly id: ID;

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

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly special_requirements: SpecialRequirement;

  @Expose()
  @IsNumber()
  readonly status: number;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreatedUserDto)
  readonly user: CreatedUserDto;
}
