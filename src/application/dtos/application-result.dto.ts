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
import { Employee } from 'src/employee/domain/employee.model';
import { ReadEmployeeDto } from '../../employee/dtos/read-employee.dto';
import { ReadJobOffertDto } from '../../job-offers/dtos/read-job-offert.dto';

@Exclude()
export class ApplicationResultDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly status: string;

  @Expose()
  @IsDate()
  readonly dateApplication: Date;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ReadEmployeeDto)
  readonly employee: ReadEmployeeDto;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ReadJobOffertDto)
  readonly jobOffer: ReadJobOffertDto;
}
