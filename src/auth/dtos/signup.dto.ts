import { Exclude, Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateUserDto } from '../../user/dtos/create-user.dto';
import { DataEmployerDto } from '../../employers/dtos/data-employer.dto';
@Exclude()
export class SignupDto {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => DataEmployerDto)
  readonly data_employer: DataEmployerDto;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  readonly data_user: CreateUserDto;
}
