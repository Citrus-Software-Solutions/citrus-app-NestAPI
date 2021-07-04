import { ReadEmployerDto } from '../dtos/read-employer.dto';

export interface IEmployersService {
  getEmployers(): Promise<ReadEmployerDto[]>;
}
