import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface PhoneNumberProps {
  value: string;
}

export class PhoneNumber extends ValueObject<PhoneNumberProps> {
  private constructor(props: PhoneNumberProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(name: string): PhoneNumber {
    // TODO: Validate phone number format
    if (name === undefined || name === null) {
      return new PhoneNumber({ value: '' });
    }
    if (name.length <= 2 || name.length > 100) {
      throw new Error(
        'Phone number must be greater than 2 digits and less than 100.',
      );
    } else {
      return new PhoneNumber({ value: name });
    }
  }
}
