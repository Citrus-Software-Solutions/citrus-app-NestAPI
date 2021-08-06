import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { EducationLevel } from '../domain/education-level.enum';

@Exclude()
export class EducationLevelDTO {
  @Expose()
  @IsEnum(EducationLevel)
  @ApiProperty({
    description: 'The education level of an employer',
    minimum: 0,
    maximum: 10,
    default: 0,
  })
  status: number;
}
