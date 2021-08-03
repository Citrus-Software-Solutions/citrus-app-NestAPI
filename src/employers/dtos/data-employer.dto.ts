import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsJSON,
  IsNotEmptyObject,
  IsObject,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { SpecialRequirement } from '../../job-offers/domain/value-objects/special-requirement.vo';
import { ReadContactInformationDto } from '../../contact-information/dto/read-contactinformation.dto';
import { ReadSkillDto } from '../../shared/skill/dtos/read-skill.dto';
import { Name } from '../../shared/domain/name.vo';
import { AddressEntity } from '../../shared/address/entities/address.entity';

import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';

@Exclude()
export class DataEmployerDto {
  @Expose()
  @IsString()
  readonly company_name: string;

  @Expose()
  @IsString()
  readonly special_requirements: string;
}
