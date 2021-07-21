import { ValueObject } from '../../../..//shared/domain/value-object.abstract';

interface ZipCodeProps {
  value: string;
}

export class ZipCode extends ValueObject<ZipCodeProps> {
  private constructor(props: ZipCodeProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(value: string): ZipCode {
    return new ZipCode({ value: value });
  }
}
