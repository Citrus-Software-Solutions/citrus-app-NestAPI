import { Exclude, Expose, Type, Transform } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Employee } from '../../employee/domain/employee.model';
import { ReadEmployerDto } from '../../employers/dtos/read-employer.dto';
import { Title } from '../domain/value-objects/title.vo';
import { DeadLine } from '../domain/value-objects/dead-line.vo';
import { SpecialRequirement } from '../domain/value-objects/special-requirement.vo';
import { Duration } from '../domain/value-objects/duration.vo';
import { Money } from '../domain/value-objects/money.vo';
import { ReadJobScheduleDto } from '../../jobs-schedule/dtos/read-jobschedule.dto';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';

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
  @Type(() => ReadAddressDto)
  readonly location: ReadAddressDto;

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
  @Type(() => SpecialRequirement)
  readonly special_requirements: SpecialRequirement[];

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
  readonly status: number;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ReadEmployerDto)
  readonly employer: ReadEmployerDto;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Employee)
  readonly employe?: Employee;
}
