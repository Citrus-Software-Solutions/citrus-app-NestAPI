import { ValueObject } from '../../../shared/domain/value-object.abstract';

interface JobTitleProps {
  value: string;
}

export class JobTitle extends ValueObject<JobTitleProps> {
  private constructor(props: JobTitleProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }
}
