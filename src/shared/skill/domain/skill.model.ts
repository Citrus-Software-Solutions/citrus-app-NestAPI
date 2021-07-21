import { Name } from '../../domain/name.vo';
import { ID } from '../../domain/id.vo';
import { SkillCategory } from './value-objects/skill-category.vo';

export class Skill {
  constructor(
    private _id: ID,
    private _name: Name,
    private _category: SkillCategory,
  ) {}

  public get id(): ID {
    return this._id;
  }
  public set id(value: ID) {
    this._id = value;
  }
  public get name(): Name {
    return this._name;
  }
  public set name(value: Name) {
    this._name = value;
  }
  public get category(): SkillCategory {
    return this._category;
  }
  public set category(value: SkillCategory) {
    this._category = value;
  }
}
