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
import { ReadContactInformationDto } from '../../contact-information/dto/read-contactinformation.dto';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';
import { Name } from '../../shared/domain/name.vo';
import { ID } from '../../shared/domain/id.vo';

@Exclude()
export class ReadEmployerDto {
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
  @Type(() => ReadAddressDto)
  readonly address: ReadAddressDto;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ReadContactInformationDto)
  readonly contacts: ReadContactInformationDto[];

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly special_requirements: SpecialRequirement;

  @Expose()
  @IsNumber()
  readonly status: number;
}
