import { Exclude } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { ReadEmployerDto } from './read-employer.dto';

@Exclude()
export class CreateEmployerDto extends ReadEmployerDto {
  @Exclude()
  @IsNumber()
  id: number;
}
