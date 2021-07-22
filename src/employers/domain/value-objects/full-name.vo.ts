import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface FullNameProps {
  value: string;
}

export class FullName extends ValueObject<FullNameProps> {
  private constructor(props: FullNameProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(name: string): FullName {
    if (name === undefined || name === null) {
      return new FullName({ value: '' });
    }
    if (name.length <= 2 || name.length > 100) {
      throw new Error(
        'Full name must be greater than 2 chars and less than 100.',
      );
    } else {
      return new FullName({ value: name });
    }
  }
}
