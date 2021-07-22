import { Name } from '../../domain/name.vo';
import { Employer } from '../../../employers/domain/employer.model';
import { EmployerEntity } from '../../../employers/entities/employers.entity';
import { DataMapper } from '../data-mapper.interface';
import { ID } from '../../../shared/domain/id.vo';
import { AddressDataMapper } from '../address/address.data-mapper';
import { ContactInformationEntity } from '../../../contact-information/entities/contact-information.entity';
import { ContactInformationDataMapper } from '../contact-information/contact-information.mapper';
import { ContactInformation } from '../../../contact-information/domain/contact-information.model';
import { SpecialRequirement } from '../../../job-offers/domain/value-objects/special-requirement.vo';

export class EmployerDataMapper
  implements DataMapper<Employer, EmployerEntity>
{
  _mapperAddress = new AddressDataMapper();
  _mapperContactInformation = new ContactInformationDataMapper();
  public toDomain(entity: EmployerEntity): Employer {
    const employer = new Employer();
    employer.id = ID.create(entity.id);
    employer.company_name = Name.create(entity.company_name);
    employer.address = this._mapperAddress.toDomain(entity.address);
    employer.contacts = entity.contacts.map(
      (contact: ContactInformationEntity) =>
        this._mapperContactInformation.toDomain(contact),
    );
    employer.special_requirements = SpecialRequirement.create(
      entity.special_requirements,
    );
    employer.status = entity.status;

    return employer;
  }

  public toDalEntity(employer: Employer): EmployerEntity {
    const employerEntity = new EmployerEntity();
    employerEntity.id = employer.id.value;
    employerEntity.company_name = employer.company_name.value;
    employerEntity.address = this._mapperAddress.toDalEntity(employer.address);
    employerEntity.contacts = employer.contacts.map(
      (contact: ContactInformation) =>
        this._mapperContactInformation.toDalEntity(contact),
    );
    employerEntity.special_requirements = employer.special_requirements.value;
    employerEntity.status = employer.status;

    return employerEntity;
  }
}
