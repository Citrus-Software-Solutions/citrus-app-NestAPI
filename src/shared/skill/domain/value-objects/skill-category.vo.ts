import { ValueObject } from '../../../domain/value-object.abstract';

interface SkillCategoryProps {
  value: string;
}

export class SkillCategory extends ValueObject<SkillCategoryProps> {
  private constructor(props: SkillCategoryProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }
}
