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
import { ID } from '../../shared/domain/id.vo';
import { Name } from '../../shared/domain/name.vo';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';

@Exclude()
export class CreatedEmployeeDto {
  @Expose()
  @IsNumber()
  @Transform(({ value }) => value.props.value)
  readonly id: ID;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly first_name: Name;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly middle_name: Name;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly last_name: Name;

  @Expose()
  @IsString()
  readonly phone_number: string;

  @Expose()
  @IsDate()
  readonly birth_date: Date;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ReadAddressDto)
  readonly address: ReadAddressDto;

  @Expose()
  @IsString()
  readonly ssn: string;

  @Expose()
  @IsNumber()
  readonly education_level: number;

  @Expose()
  @IsNumber()
  readonly rating: number;

  @Expose()
  @IsNumber()
  readonly status: number;
}
