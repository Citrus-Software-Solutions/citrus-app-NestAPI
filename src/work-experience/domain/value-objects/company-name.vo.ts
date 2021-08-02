import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface CompanyNameProps {
  value: string;
}

export class CompanyName extends ValueObject<CompanyNameProps> {
  private constructor(props: CompanyNameProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(name: string): CompanyName {
    if (name === undefined || name === null) {
      return new CompanyName({ value: '' });
    }
    if (name.length <= 2 || name.length > 100) {
      throw new Error(
        'Company name must be greater than 2 chars and less than 100.',
      );
    } else {
      return new CompanyName({ value: name });
    }
  }
}
