import { InternalServerErrorException } from '@nestjs/common';
import { ValueObject } from './value-object.abstract';

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

  public static create(name: string): JobTitle {
    if (name === undefined || name === null) {
      return new JobTitle({ value: '' });
    }
    if (name.length <= 2 || name.length > 100) {
      throw new InternalServerErrorException(
        'Name must be greater than 2 chars and less than 100.',
      );
    } else {
      return new JobTitle({ value: name });
    }
  }
}
