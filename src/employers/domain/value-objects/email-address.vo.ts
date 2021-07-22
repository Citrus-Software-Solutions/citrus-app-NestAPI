import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface EmailAddressProps {
  value: string;
}

export class EmailAddress extends ValueObject<EmailAddressProps> {
  private constructor(props: EmailAddressProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(name: string): EmailAddress {
    // TODO: Validate email address format
    if (name === undefined || name === null) {
      return new EmailAddress({ value: '' });
    }
    if (name.length <= 2 || name.length > 100) {
      throw new Error(
        'Email address must be greater than 2 chars and less than 100.',
      );
    } else {
      return new EmailAddress({ value: name });
    }
  }
}
