import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ShowJobScheduleDto } from '../../jobs-schedule/dtos/show-job-schedule.dto';
import { WriteAddressDto } from '../../shared/address/dtos/write-address.dto';
import { ShowSkillDto } from '../../shared/skill/dtos/show-skill.dto';

@Exclude()
export class DataJobOfferDto {
  @Expose()
  @IsString()
  readonly title: string;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => WriteAddressDto)
  readonly location: WriteAddressDto;

  @Expose()
  @IsDateString()
  readonly dead_line: string;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ShowJobScheduleDto)
  @IsArray()
  @IsOptional()
  readonly schedules: ShowJobScheduleDto[];

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ShowSkillDto)
  @IsArray()
  @IsOptional()
  readonly skills: ShowSkillDto[];

  @Expose()
  @IsString()
  @IsOptional()
  readonly special_requirements: string;

  @Expose()
  @IsNumber()
  readonly duration: number;

  @Expose()
  @IsNumber()
  readonly hourly_rate: number;
}
