import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { EmployeeStatus } from '../domain/employee-status.enum';

@Exclude()
export class EmployeeStatusDTO {
  @Expose()
  @IsEnum(EmployeeStatus)
  @ApiProperty({
    description: 'The status of an employer',
    minimum: 0,
    maximum: 5,
    default: 0,
  })
  status: number;
}
