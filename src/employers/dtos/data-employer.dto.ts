import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { SpecialRequirement } from '../../job-offers/domain/value-objects/special-requirement.vo';
import { ReadContactInformationDto } from '../../contact-information/dto/read-contactinformation.dto';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';
import { Name } from '../../shared/domain/name.vo';
import { ReadSkillDto } from '../../shared/skill/dtos/read-skill.dto';

@Exclude()
export class DataEmployerDto {
  @Expose()
  @IsString()
  readonly company_name: string;

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
  @ValidateNested({ each: true })
  @Type(() => ReadSkillDto)
  readonly skills: ReadSkillDto[];

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly special_requirements: SpecialRequirement;
}
