import { ValueObject } from './value-object.abstract';

interface IDProps {
  value: number;
}

export class ID extends ValueObject<IDProps> {
  private constructor(props: IDProps) {
    super(props);
  }

  get value(): number {
    return this.props.value;
  }

  public static create(value: number): ID {
    return new ID({ value: value });
  }
}
