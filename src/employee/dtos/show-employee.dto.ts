import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ShowReferenceDto } from '../../reference/dtos/show-reference.dto';
import { WriteAddressDto } from '../../shared/address/dtos/write-address.dto';
import { ShowSkillDto } from '../../shared/skill/dtos/show-skill.dto';
import { ShowWorkExperienceDto } from '../../work-experience/dtos/show-work-experience.dto';
import { EducationLevelDTO } from './education-level.dto';
import { EmployeeStatusDTO } from './employee-status.dto';

@Exclude()
export class ShowEmployeeDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly first_name: string;

  @Expose()
  @IsString()
  readonly middle_name: string;

  @Expose()
  @IsString()
  readonly last_name: string;

  @Expose()
  @IsPhoneNumber()
  readonly phone_number: string;

  @Expose()
  @IsDate()
  readonly birth_date: string;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => WriteAddressDto)
  readonly address: WriteAddressDto;

  @Expose()
  @IsString()
  readonly ssn: string;

  @Expose()
  @IsNumber()
  readonly education_level: EducationLevelDTO;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ShowWorkExperienceDto)
  readonly work_experiences: ShowWorkExperienceDto[];

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ShowSkillDto)
  readonly skills: ShowSkillDto[];

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ShowReferenceDto)
  readonly references: ShowReferenceDto[];

  @Expose()
  @IsNumber()
  readonly rating: number;

  @Expose()
  @IsNumber()
  readonly status: EmployeeStatusDTO;
}
