import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsString,
  ValidateNested,
} from 'class-validator';
import { WriteAddressDto } from '../../shared/address/dtos/write-address.dto';
import { EducationLevel } from '../domain/education-level.enum';

@Exclude()
export class DataEmployeeDto {
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
  @IsString()
  readonly phone_number: string;

  @Expose()
  @IsDateString()
  readonly birth_date: string;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => WriteAddressDto)
  readonly address: WriteAddressDto;

  @Expose()
  @IsString()
  readonly ssn: string;

  @Expose()
  @IsEnum(EducationLevel)
  @ApiProperty({
    description: 'The education level of an employer',
    minimum: 0,
    maximum: 10,
    default: 0,
  })
  readonly education_level: number;
}
