import { ValueObject } from '../../../domain/value-object.abstract';

interface SkillCategoryProps {
  value: number;
}

export class SkillCategory extends ValueObject<SkillCategoryProps> {
  private constructor(props: SkillCategoryProps) {
    super(props);
  }

  get value(): number {
    return this.props.value;
  }

  public static create(value: number): SkillCategory {
    return new SkillCategory({ value: value });
  }
}
