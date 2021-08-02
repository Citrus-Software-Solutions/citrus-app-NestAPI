import { JobTitle } from '../../../contact-information/domain/value-objects/job-title.vo';
import { Name } from '../../../shared/domain/name.vo';
import { ContactInformation } from '../../../contact-information/domain/contact-information.model';
import { ContactInformationEntity } from '../../../contact-information/entities/contact-information.entity';
import { DataMapper } from '../data-mapper.interface';

export class ContactInformationDataMapper
  implements DataMapper<ContactInformation, ContactInformationEntity>
{
  toDomain(entity: ContactInformationEntity): ContactInformation {
    const contact = new ContactInformation();
    contact.full_name = Name.create(entity.full_name);
    contact.job_title = JobTitle.create(entity.job_title);
    contact.phone_number = entity.phone_number;
    contact.email = entity.email;

    return contact;
  }
  toDalEntity(contact: ContactInformation): ContactInformationEntity {
    const contactEntity = new ContactInformationEntity();
    contactEntity.full_name = contact.full_name.value;
    contactEntity.job_title = contact.job_title.value;
    contactEntity.phone_number = contact.phone_number;
    contactEntity.email = contact.email;

    return contactEntity;
  }
}
