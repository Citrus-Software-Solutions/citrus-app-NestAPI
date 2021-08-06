import { InternalServerErrorException } from '@nestjs/common';
import { ValueObject } from './value-object.abstract';

interface NameProps {
  value: string;
}

export class Name extends ValueObject<NameProps> {
  private constructor(props: NameProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(name: string): Name {
    if (name === undefined || name === null) {
      return new Name({ value: '' });
    }
    if (name.length <= 2 || name.length > 100) {
      throw new InternalServerErrorException(
        'Name must be greater than 2 chars and less than 100.',
      );
    } else {
      return new Name({ value: name });
    }
  }
}
