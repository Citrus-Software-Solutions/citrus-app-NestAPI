import { InternalServerErrorException } from '@nestjs/common';
import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface DurationProps {
  value: number;
}

export class Duration extends ValueObject<DurationProps> {
  private constructor(props: DurationProps) {
    super(props);
  }

  get value(): number {
    return this.props.value;
  }

  public static create(hours: number): Duration {
    if (hours === undefined || hours === null) {
      throw new InternalServerErrorException(
        'Total of hours can not be empty.',
      );
    }
    if (hours <= 0) {
      throw new InternalServerErrorException(
        'Total of hours can not be zero or negative.',
      );
    } else {
      return new Duration({ value: hours });
    }
  }
}
