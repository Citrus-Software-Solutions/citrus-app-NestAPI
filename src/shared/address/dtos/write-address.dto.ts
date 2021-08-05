import { Exclude, Expose, Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

@Exclude()
export class WriteAddressDto {
  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly street1: string;

  @Expose()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.props.value)
  readonly street2: string;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly city: string;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly state: string;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly zip: string;
}
