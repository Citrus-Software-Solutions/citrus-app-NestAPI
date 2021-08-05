import { Exclude, Expose, Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { ReadAddressDto } from '../../shared/address/dtos/read-address.dto';

@Exclude()
export class DataEmployerDto {
  @Expose()
  @IsString()
  readonly company_name: string;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ReadAddressDto)
  readonly address: ReadAddressDto;

  @Expose()
  @IsString()
  readonly special_requirements: string;
}
