import { Employer } from '../../../employers/domain/employer.model';
import { ContactInformationEntity } from '../../../employers/entities/contact-information.entity';
import { EmployerEntity } from '../../../employers/entities/employers.entity';
import { SpecialRequirement } from '../../../shared/domain/special-requirement.vo';
import { Skill } from '../../../shared/skill/domain/skill.model';
import { SkillEntity } from '../../../shared/skill/entities/skill.entity';
import { Name } from '../../domain/name.vo';
import { AddressDataMapper } from '../address/address.data-mapper';
import { DataMapper } from '../data-mapper.interface';
import { SkillDataMapper } from '../skill/skill.data-mapper';
import { ContactInformationDataMapper } from './contact-information.mapper';

export class EmployerDataMapper
  implements DataMapper<Employer, EmployerEntity>
{
  mapperAddress = new AddressDataMapper();
  mapperSkill = new SkillDataMapper();
  mapperContactInformation = new ContactInformationDataMapper();

  public toDomain(entity: EmployerEntity): Employer {
    const specialRequirements: SpecialRequirement[] = [];
    for (const specialRequirement in entity.special_requirements) {
      specialRequirements.push(
        SpecialRequirement.create(
          entity.special_requirements[specialRequirement],
        ),
      );
    }

    const employer = new Employer(
      Name.create(entity.company_name),
      this.mapperAddress.toDomain(entity.address),
      entity.contacts.map((contact: ContactInformationEntity) =>
        this.mapperContactInformation.toDomain(contact),
      ),
      entity.logo,
      entity.skills.map((skill: SkillEntity) =>
        this.mapperSkill.toDomain(skill),
      ),
      specialRequirements,
      entity.status,
    );

    return employer;
  }

  public toDalEntity(employer: Employer): EmployerEntity {
    const employerEntity = new EmployerEntity();

    const specialRequirements: string[] = [];
    for (const specialRequirementString in employer.specialRequirements) {
      specialRequirements.push(specialRequirementString);
    }

    employerEntity.company_name = employer.companyName.value;
    employerEntity.address = this.mapperAddress.toDalEntity(employer.address);
    employerEntity.logo = employer.logo;
    employerEntity.skills = employer.skills.map((skill: Skill) =>
      this.mapperSkill.toDalEntity(skill),
    );
    employerEntity.special_requirements = specialRequirements;

    return employerEntity;
  }
}
