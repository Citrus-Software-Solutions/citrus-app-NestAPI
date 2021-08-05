import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class ReadRoleInUserDto {
  @Expose()
  @IsString()
  readonly name: string;
}
