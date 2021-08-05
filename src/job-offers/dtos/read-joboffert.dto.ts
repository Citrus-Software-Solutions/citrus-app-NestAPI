import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { WriteAddressDto } from 'src/shared/address/dtos/write-address.dto';
import { ReadEmployeeDto } from '../../employee/dtos/read-employee.dto';
import { ReadEmployerInJobOfferDto } from '../../employers/dtos/read-employer-in-joboffer.dto';
import { ReadJobScheduleDto } from '../../jobs-schedule/dtos/read-jobschedule.dto';
import { ReadSkillDto } from '../../shared/skill/dtos/read-skill.dto';
import { JobOfferStatus } from '../domain/job-offer-status.enum';
import { DeadLine } from '../domain/value-objects/dead-line.vo';
import { Duration } from '../domain/value-objects/duration.vo';
import { Money } from '../domain/value-objects/money.vo';
import { SpecialRequirement } from '../domain/value-objects/special-requirement.vo';
import { Title } from '../domain/value-objects/title.vo';

@Exclude()
export class ReadJobOfferDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly title: Title;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => WriteAddressDto)
  readonly location: WriteAddressDto;

  @Expose()
  @IsDate()
  @Transform(({ value }) => value.props.value)
  readonly dead_line: DeadLine;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ReadJobScheduleDto)
  readonly schedules: ReadJobScheduleDto[];

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ReadSkillDto)
  readonly skills: ReadSkillDto[];

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly special_requirements: SpecialRequirement;

  @Expose()
  @IsNumber()
  @Transform(({ value }) => value.props.value)
  readonly duration: Duration;

  @Expose()
  @IsNumber()
  @Transform(({ value }) => value.props.value)
  readonly hourly_rate: Money;

  @Expose()
  @IsNumber()
  readonly status: JobOfferStatus;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ReadEmployerInJobOfferDto)
  readonly employer: ReadEmployerInJobOfferDto;

  @Expose()
  @ValidateNested()
  @Type(() => ReadEmployeeDto)
  readonly employe: ReadEmployeeDto;
}
