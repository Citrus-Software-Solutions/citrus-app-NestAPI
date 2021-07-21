import { ValueObject } from '../../../../shared/domain/value-object.abstract';

interface StateAddressProps {
  value: string;
}

export class StateAddress extends ValueObject<StateAddressProps> {
  private constructor(props: StateAddressProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(value: string): StateAddress {
    return new StateAddress({ value: value });
  }
}
