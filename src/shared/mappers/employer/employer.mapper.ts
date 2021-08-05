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
import { Skill } from '../../../shared/skill/domain/skill.model';
import { SkillDataMapper } from '../skill/skill.data-mapper';
import { SkillEntity } from '../../../shared/skill/entities/skill.entity';
import { UserDataMapper } from '../user/user.mapper';

export class EmployerDataMapper
  implements DataMapper<Employer, EmployerEntity>
{
  _mapperAddress = new AddressDataMapper();
  _mapperSkill = new SkillDataMapper();
  _mapperContactInformation = new ContactInformationDataMapper();
  _mapperUser = new UserDataMapper();
  public toDomain(entity: EmployerEntity): Employer {
    const employer = new Employer();
    employer.id = ID.create(entity.id);
    employer.company_name = Name.create(entity.company_name);
    employer.address = this._mapperAddress.toDomain(entity.address);
    if (entity.contacts) {
      employer.contacts = entity.contacts.map(
        (contact: ContactInformationEntity) =>
          this._mapperContactInformation.toDomain(contact),
      );
    }
    if (entity.skills) {
      employer.skills = entity.skills.map((skill: SkillEntity) =>
        this._mapperSkill.toDomain(skill),
      );
    }
    employer.special_requirements = SpecialRequirement.create(
      entity.special_requirements,
    );
    employer.status = entity.status;

    employer.user = this._mapperUser.toDomain(entity.user);

    return employer;
  }

  public toDalEntity(employer: Employer): EmployerEntity {
    const employerEntity = new EmployerEntity();
    if (employer.id) {
      employerEntity.id = employer.id.value;
    }

    employerEntity.company_name = employer.company_name.value;

    if (employer.address) {
      employerEntity.address = this._mapperAddress.toDalEntity(
        employer.address,
      );
    }

    if (employer.contacts) {
      employerEntity.contacts = employer.contacts.map(
        (contact: ContactInformation) =>
          this._mapperContactInformation.toDalEntity(contact),
      );
    }

    if (employer.skills) {
      employerEntity.skills = employer.skills.map((skill: Skill) =>
        this._mapperSkill.toDalEntity(skill),
      );
    }
    employerEntity.special_requirements = employer.special_requirements.value;
    employerEntity.status = employer.status;

    return employerEntity;
  }
}
