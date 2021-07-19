import { ValueObject } from '../../../..//shared/domain/value-object.abstract';

interface StreetAddressProps {
  value: string;
}

export class StreetAddress extends ValueObject<StreetAddressProps> {
  private constructor(props: StreetAddressProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }
}
