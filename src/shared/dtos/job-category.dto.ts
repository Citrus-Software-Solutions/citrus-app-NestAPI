import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { JobCategory } from '../domain/job-category.enum';

@Exclude()
export class JobCategoryDTO {
  @Expose()
  @IsEnum(JobCategory)
  @ApiProperty({
    description: 'The category of a job offer',
    minimum: 0,
    maximum: 3,
    default: 0,
  })
  status: number;
}
