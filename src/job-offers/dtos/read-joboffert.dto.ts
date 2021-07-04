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
import { ReadEmployerDto } from '../../employers/dtos/read-employer.dto';

@Exclude()
export class ReadJobOfferDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly name: string;

  @Expose()
  @IsString()
  readonly description: string;

  @Expose()
  @IsNumber()
  readonly availableVacans: number;

  @Expose()
  @IsDate()
  readonly dateBegin: Date;

  @Expose()
  @IsDate()
  readonly dateEnd: Date;

  @Expose()
  @IsString()
  readonly status: string;

  @Expose()
  @IsString()
  readonly gender: string;

  @Expose()
  @IsNumber()
  readonly salary: number;

  @Expose()
  @IsNumber()
  readonly minAge?: number;

  @Expose()
  @IsNumber()
  readonly maxAge?: number;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ReadEmployerDto)
  readonly creador: ReadEmployerDto;
}
