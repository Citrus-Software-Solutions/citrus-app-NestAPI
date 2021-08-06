import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsDate, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Name } from '../../shared/domain/name.vo';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';

@Exclude()
export class DataEmployeeDto {
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
  @ValidateNested({ each: true })
  @Type(() => ReadAddressDto)
  readonly address: ReadAddressDto;

  @Expose()
  @IsString()
  readonly ssn: string;

  @Expose()
  @IsNumber()
  readonly education_level: number;
}
