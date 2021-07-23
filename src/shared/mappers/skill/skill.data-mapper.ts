import { ID } from '../../../shared/domain/id.vo';
import { Name } from '../../../shared/domain/name.vo';
import { Skill } from '../../../shared/skill/domain/skill.model';
import { SkillCategory } from '../../../shared/skill/domain/value-objects/skill-category.vo';
import { ReadSkillDto } from '../../../shared/skill/dtos/read-skill.dto';
import { SkillEntity } from '../../../shared/skill/entities/skill.entity';
import { DataMapper } from '../data-mapper.interface';

export class SkillDataMapper implements DataMapper<Skill, SkillEntity> {
  public toDomain(entity: SkillEntity): Skill {
    const skill = new Skill(
      ID.create(entity.id),
      Name.create(entity.name),
      SkillCategory.create(entity.category),
    );

    return skill;
  }

  public toDalEntity(skill: Skill): SkillEntity {
    const skillEntity = new SkillEntity();
    skillEntity.name = skill.name.value;
    skillEntity.category = skill.category.value;

    return skillEntity;
  }

  public ReadDTOtoDomain(skillDTO: ReadSkillDto): Skill {
    const contactInformation = new Skill(
      ID.create(skillDTO.id.value),
      Name.create(skillDTO.name.value),
      SkillCategory.create(skillDTO.category.value),
    );
    return contactInformation;
  }
}
