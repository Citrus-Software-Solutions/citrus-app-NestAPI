import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface ScheduleProps {
  value: Date;
}

export class Schedule extends ValueObject<ScheduleProps> {
  private constructor(props: ScheduleProps) {
    super(props);
  }

  get value(): Date {
    return this.props.value;
  }

  public static create(date: Date): Schedule {
    if (!date) {
      throw new Error('Dates can not be empty');
    } else {
      return new Schedule({ value: date });
    }
  }
}
