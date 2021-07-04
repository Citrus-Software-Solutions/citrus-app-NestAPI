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
import { ReadEmployeeInApplicationDto } from '../../employee/dtos/read-employee-in-application.dto';
import { ReadJobOfferInApplicationDto } from '../../job-offers/dtos/read-joboffert-in-application.dto';

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
  @Type(() => ReadEmployeeInApplicationDto)
  readonly employee: ReadEmployeeInApplicationDto;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ReadJobOfferInApplicationDto)
  readonly jobOffer: ReadJobOfferInApplicationDto;
}
