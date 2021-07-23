import { ReadContactInformationDto } from 'src/employers/dtos/read-contact-information.dto';
import { ContactInformation } from '../../../employers/domain/contact-information.model';
import { EmailAddress } from '../../../employers/domain/value-objects/email-address.vo';
import { FullName } from '../../../employers/domain/value-objects/full-name.vo';
import { JobTitle } from '../../../employers/domain/value-objects/job-title.vo';
import { PhoneNumber } from '../../../employers/domain/value-objects/phone-number.vo';
import { ContactInformationEntity } from '../../../employers/entities/contact-information.entity';
import { DataMapper } from '../data-mapper.interface';

export class ContactInformationDataMapper
  implements DataMapper<ContactInformation, ContactInformationEntity>
{
  public toDomain(entity: ContactInformationEntity): ContactInformation {
    const contact = new ContactInformation(
      FullName.create(entity.full_name),
      JobTitle.create(entity.job_title),
      PhoneNumber.create(entity.phone_number),
      EmailAddress.create(entity.email),
    );

    return contact;
  }

  public toDalEntity(contact: ContactInformation): ContactInformationEntity {
    const contactInformationEntity = new ContactInformationEntity();
    contactInformationEntity.full_name = contact.fullName.value;
    contactInformationEntity.job_title = contact.jobTitle.value;
    contactInformationEntity.phone_number = contact.phone.value;
    contactInformationEntity.email = contact.email.value;

    return contactInformationEntity;
  }

  public ReadDTOtoDomain(
    contactInformationDTO: ReadContactInformationDto,
  ): ContactInformation {
    const contactInformation = new ContactInformation(
      FullName.create(contactInformationDTO.full_name.value),
      JobTitle.create(contactInformationDTO.job_title.value),
      PhoneNumber.create(contactInformationDTO.phone.value),
      EmailAddress.create(contactInformationDTO.email.value),
    );
    return contactInformation;
  }
}
