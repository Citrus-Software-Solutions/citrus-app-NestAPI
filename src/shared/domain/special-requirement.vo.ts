import { ValueObject } from './value-object.abstract';

interface SpecialRequirementProps {
  value: string;
}

export class SpecialRequirement extends ValueObject<SpecialRequirementProps> {
  private constructor(props: SpecialRequirementProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(name: string): SpecialRequirement {
    if (name === undefined || name === null) {
      return new SpecialRequirement({ value: '' });
    }
    if (name.length <= 2 || name.length > 700) {
      throw new Error('Name must be greater than 2 chars and less than 100.');
    } else {
      return new SpecialRequirement({ value: name });
    }
  }
}
