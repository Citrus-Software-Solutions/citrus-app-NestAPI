import { Name } from '../../../shared/domain/name.model';
import { Employer } from '../../../employers/domain/employer.model';
import { EmployerEntity } from '../../../employers/entities/employers.entity';
import { DataMapper } from '../data-mapper.interface';

export class EmployerDataMapper
  implements DataMapper<Employer, EmployerEntity>
{
  public toDomain(entity: EmployerEntity): Employer {
    const employer = new Employer();
    employer.id = entity.id;
    employer.name = Name.create(entity.name);

    return employer;
  }

  public toDalEntity(employer: Employer): EmployerEntity {
    const employerEntity = new EmployerEntity();
    employerEntity.id = employer.id;
    employerEntity.name = employer.name.value;

    return employerEntity;
  }
}
