import { InternalServerErrorException } from '@nestjs/common';
import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface DeadLineProps {
  value: Date;
}

export class DeadLine extends ValueObject<DeadLineProps> {
  private constructor(props: DeadLineProps) {
    super(props);
  }

  get value(): Date {
    return this.props.value;
  }

  public static create(date: Date): DeadLine {
    if (!date) {
      throw new InternalServerErrorException('Dead Line can not be empty');
      // Validar que la fecha sea mayor a la actual
    } else {
      return new DeadLine({ value: date });
    }
  }
}
