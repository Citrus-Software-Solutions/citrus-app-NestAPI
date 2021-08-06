import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { JobCategoryDTO } from '../../../shared/dtos/job-category.dto';

@Exclude()
export class ShowSkillDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly name: string;

  @Expose()
  @IsNumber()
  readonly category: JobCategoryDTO;
}
