import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ReadRoleInUserDto } from '../../role/dtos/read-role-in-user.dto';

@Exclude()
export class CreatedUserDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly username: string;

  @Expose()
  @IsString()
  readonly email: string;

  @Expose()
  @IsString()
  readonly status: string;

  @Expose()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ReadRoleInUserDto)
  readonly role: ReadRoleInUserDto;
}
