import { InternalServerErrorException } from '@nestjs/common';
import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface MoneyProps {
  value: number;
}

export class Money extends ValueObject<MoneyProps> {
  private constructor(props: MoneyProps) {
    super(props);
  }

  get value(): number {
    return this.props.value;
  }

  public static create(amount: number): Money {
    if (amount === undefined || amount === null) {
      throw new InternalServerErrorException(
        'Payment for every hour of work can not be empty.',
      );
    }
    if (amount <= 0) {
      throw new InternalServerErrorException(
        'Payment for every hour of work can not be zero or negative.',
      );
    } else {
      return new Money({ value: amount });
    }
  }
}
