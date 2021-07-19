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
}
