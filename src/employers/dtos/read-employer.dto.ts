import { Exclude, Expose, Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { Name } from '../../shared/domain/name.vo';

@Exclude()
export class ReadEmployerDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  @Transform(({ value }) => value.props.value)
  readonly name: Name;
}
