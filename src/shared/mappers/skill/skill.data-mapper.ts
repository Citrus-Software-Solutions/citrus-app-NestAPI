import { SkillEntity } from '../../../shared/skill/entities/skill.entity';
import { Skill } from '../../../shared/skill/domain/skill.model';
import { DataMapper } from '../data-mapper.interface';
import { Name } from '../../../shared/domain/name.vo';
import { ID } from '../../../shared/domain/id.vo';
import { SkillCategory } from '../../../shared/skill/domain/value-objects/skill-category.vo';

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
}
