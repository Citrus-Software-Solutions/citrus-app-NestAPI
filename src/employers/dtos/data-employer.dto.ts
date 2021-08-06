import { Exclude, Expose, Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { WriteAddressDto } from 'src/shared/address/dtos/write-address.dto';

@Exclude()
export class DataEmployerDto {
  @Expose()
  @IsString()
  readonly company_name: string;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => WriteAddressDto)
  readonly address: WriteAddressDto;

  @Expose()
  @IsString()
  @IsOptional()
  readonly special_requirements: string;
}
