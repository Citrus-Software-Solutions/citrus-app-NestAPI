import { ValueObject } from '../../../../shared/domain/value-object.abstract';

interface CityAddressProps {
  value: string;
}

export class CityAddress extends ValueObject<CityAddressProps> {
  private constructor(props: CityAddressProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(value: string): CityAddress {
    return new CityAddress({ value: value });
  }
}
