import { InternalServerErrorException } from '@nestjs/common';
import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface TitleProps {
  value: string;
}

export class Title extends ValueObject<TitleProps> {
  private constructor(props: TitleProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(name: string): Title {
    if (name === undefined || name === null) {
      return new Title({ value: '' });
    }
    if (name.length <= 2 || name.length > 100) {
      throw new InternalServerErrorException(
        'Name must be greater than 2 chars and less than 100.',
      );
    } else {
      return new Title({ value: name });
    }
  }
}
