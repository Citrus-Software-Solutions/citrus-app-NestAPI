import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { JobCategoryDTO } from '../../shared/dtos/job-category.dto';

@Exclude()
export class ShowWorkExperienceDto {
  @Expose()
  @IsString()
  readonly job_title: string;

  @Expose()
  @IsString()
  readonly company_name: string;

  @Expose()
  @IsNumber()
  readonly category: JobCategoryDTO;
}
