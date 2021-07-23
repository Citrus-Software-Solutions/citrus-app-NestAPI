import { Exclude, Expose, Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { ID } from '../../../shared/domain/id.vo';
import { Name } from '../../../shared/domain/name.vo';
import { SkillCategory } from '../domain/value-objects/skill-category.vo';

@Exclude()
export class ReadSkillDto {
  @Expose()
  @IsNumber()
  @Transform(({ value }) => value.props.value)
  readonly id: ID;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly name: Name;

  @Expose()
  @IsNumber()
  @Transform(({ value }) => value.props.value)
  readonly category: SkillCategory;
}
