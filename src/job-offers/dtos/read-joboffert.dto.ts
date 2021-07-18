import { Exclude, Expose, Type } from 'class-transformer';
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

@Exclude()
export class ReadJobOfferDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly title: string;

  @Expose()
  @IsDate()
  readonly dead_line: Date;

  @Expose()
  @IsString()
  readonly special_requirements: string;

  @Expose()
  @IsNumber()
  readonly duration: number;

  @Expose()
  @IsNumber()
  readonly hourly_rate: number;

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
