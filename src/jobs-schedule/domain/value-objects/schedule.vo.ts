import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface ScheduleProps {
  fecha_ini: Date;
  fecha_fin: Date;
}

export class Schedule extends ValueObject<ScheduleProps> {
  private constructor(props: ScheduleProps) {
    super(props);
  }

  get fecha_ini(): Date {
    return this.props.fecha_ini;
  }

  get fecha_fin(): Date {
    return this.props.fecha_fin;
  }

  public static create(fecha_ini: Date, fecha_fin: Date): Schedule {
    if (!fecha_ini || !fecha_fin) {
      throw new Error('Dates can not be empty');
    } else if (fecha_fin < fecha_ini) {
      throw new Error('Begin date can not be higher than end date');
    } else {
      return new Schedule({
        fecha_ini: fecha_ini,
        fecha_fin: fecha_fin,
      });
    }
  }
}
