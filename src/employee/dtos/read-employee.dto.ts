import { Exclude, Expose, Transform } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Name } from '../../shared/domain/name.vo';

@Exclude()
export class ReadEmployeeDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly name: Name;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly secondName?: Name;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly lastName: Name;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly secondLastName?: Name;

  @Expose()
  @IsString()
  readonly gender: string;

  @Expose()
  @IsDate()
  readonly birthDate: Date;
}
