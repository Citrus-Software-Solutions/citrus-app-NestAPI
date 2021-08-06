import { Exclude, Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateUserDto } from '../../user/dtos/create-user.dto';
import { DataEmployeeDto } from '../../employee/dtos/data-employee.dto';
@Exclude()
export class SignupEmployeeDto {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => DataEmployeeDto)
  readonly data_employee: DataEmployeeDto;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  readonly data_user: CreateUserDto;
}
