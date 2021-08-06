import { Exclude, Expose, Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { WriteAddressDto } from '../../shared/address/dtos/write-address.dto';

@Exclude()
export class UpdateEmployerDto {
  @Expose()
  @IsOptional()
  @IsString()
  readonly company_name: string;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => WriteAddressDto)
  readonly address: WriteAddressDto;

  @Expose()
  @IsOptional()
  @IsString()
  readonly special_requirements: string;
}
