import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';
import { Name } from '../../shared/domain/name.vo';
import { SpecialRequirement } from '../../shared/domain/special-requirement.vo';
import { ReadSkillDto } from '../../shared/skill/dtos/read-skill.dto';
import { ReadContactInformationDto } from './read-contact-information.dto';

@Exclude()
export class ReadEmployerDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly companyName: Name;

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
  readonly logo: string;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ReadSkillDto)
  readonly skills?: ReadSkillDto[];

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => SpecialRequirement)
  readonly special_requirements: SpecialRequirement[];
}
