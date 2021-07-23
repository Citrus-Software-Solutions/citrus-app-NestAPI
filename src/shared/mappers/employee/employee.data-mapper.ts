import { Name } from '../../domain/name.vo';
import { Employee } from '../../../employee/domain/employee.model';
import { EmployeeEntity } from '../../../employee/entities/employee.entity';
import { DataMapper } from '../data-mapper.interface';
import { ID } from '../../../shared/domain/id.vo';
import { AddressDataMapper } from '../address/address.data-mapper';
import { SkillEntity } from '../../../shared/skill/entities/skill.entity';
import { SkillDataMapper } from '../skill/skill.data-mapper';
import { Skill } from '../../../shared/skill/domain/skill.model';
import { WorkExperienceEntity } from '../../../work-experience/entities/work-experience.entity';
import { WorkExperienceDataMapper } from '../work-experience/work-experience.mapper';
import { WorkExperience } from '../../../work-experience/domain/work-experience.model';
import { ReferenceEntity } from '../../../reference/entities/reference.entity';
import { ReferenceDataMapper } from '../references/reference.mapper';
import { Reference } from '../../../reference/domain/reference.model';

export class EmployeeDataMapper
  implements DataMapper<Employee, EmployeeEntity>
{
  _mapperAddress = new AddressDataMapper();
  _mapperSkill = new SkillDataMapper();
  _mapperWorkExperience = new WorkExperienceDataMapper();
  _mapperReference = new ReferenceDataMapper();
  public toDomain(entity: EmployeeEntity): Employee {
    const employee = new Employee(
      ID.create(entity.id),
      Name.create(entity.first_name),
      Name.create(entity.middle_name),
      Name.create(entity.last_name),
      entity.phone_number,
      entity.birth_date,
      this._mapperAddress.toDomain(entity.address),
      entity.ssn,
      entity.education_level,
      entity.work_experiences.map((workExperience: WorkExperienceEntity) =>
        this._mapperWorkExperience.toDomain(workExperience),
      ),
      entity.skills.map((skill: SkillEntity) =>
        this._mapperSkill.toDomain(skill),
      ),
      entity.references.map((reference: ReferenceEntity) =>
        this._mapperReference.toDomain(reference),
      ),
      entity.rating,
      entity.status,
    );

    return employee;
  }

  public toDalEntity(employee: Employee): EmployeeEntity {
    const employeeEntity = new EmployeeEntity();
    employeeEntity.id = employee.id.value;
    employeeEntity.first_name = employee.first_name.value;
    employeeEntity.middle_name = employee.middle_name.value;
    employeeEntity.last_name = employee.last_name.props.value;
    employeeEntity.phone_number = employee.phone_number;
    employeeEntity.birth_date = employee.birth_date;
    employeeEntity.address = this._mapperAddress.toDalEntity(employee.address);
    employeeEntity.ssn = employee.ssn;
    employeeEntity.education_level = employee.education_level;
    employeeEntity.work_experiences = employee.work_experiences.map(
      (workExperience: WorkExperience) =>
        this._mapperWorkExperience.toDalEntity(workExperience),
    );
    employeeEntity.skills = employee.skills.map((skill: Skill) =>
      this._mapperSkill.toDalEntity(skill),
    );
    employeeEntity.references = employee.references.map(
      (reference: Reference) => this._mapperReference.toDalEntity(reference),
    );
    employeeEntity.rating = employee.rating;
    employeeEntity.status = employee.status;

    return employeeEntity;
  }
}
