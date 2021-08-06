import { Skill } from '../../shared/skill/domain/skill.model';
import { Address } from '../../shared/address/domain/address.model';
import { Name } from '../../shared/domain/name.vo';
import { ID } from '../../shared/domain/id.vo';
import { WorkExperience } from '../../work-experience/domain/work-experience.model';
import { Reference } from '../../reference/domain/reference.model';
import { User } from '../../user/domain/user.model';
import { EducationLevel } from './education-level.enum';

export class Employee {
  private _id: ID;
  private _first_name: Name;
  private _middle_name: Name;
  private _last_name: Name;
  private _phone_number: string;
  private _birth_date: Date;
  private _address: Address;
  private _ssn: string;
  private _education_level: EducationLevel;
  private _work_experiences: WorkExperience[];
  private _skills: Skill[];
  // private _trainings: Trainings[];
  private _references: Reference[];
  private _rating: number;
  private _status: number;
  private _user: User;

  public get user(): User {
    return this._user;
  }

  public set user(value: User) {
    this._user = value;
  }

  public get references(): Reference[] {
    return this._references;
  }
  public set references(value: Reference[]) {
    this._references = value;
  }

  public get work_experiences(): WorkExperience[] {
    return this._work_experiences;
  }
  public set work_experiences(value: WorkExperience[]) {
    this._work_experiences = value;
  }

  public get status(): number {
    return this._status;
  }
  public set status(value: number) {
    this._status = value;
  }
  public get rating(): number {
    return this._rating;
  }
  public set rating(value: number) {
    this._rating = value;
  }
  public get skills(): Skill[] {
    return this._skills;
  }
  public set skills(value: Skill[]) {
    this._skills = value;
  }
  public get education_level(): EducationLevel {
    return this._education_level;
  }
  public set education_level(value: EducationLevel) {
    this._education_level = value;
  }
  public get ssn(): string {
    return this._ssn;
  }
  public set ssn(value: string) {
    this._ssn = value;
  }
  public get address(): Address {
    return this._address;
  }
  public set address(value: Address) {
    this._address = value;
  }
  public get birth_date(): Date {
    return this._birth_date;
  }
  public set birth_date(value: Date) {
    this._birth_date = value;
  }
  public get phone_number(): string {
    return this._phone_number;
  }
  public set phone_number(value: string) {
    this._phone_number = value;
  }
  public get last_name(): Name {
    return this._last_name;
  }
  public set last_name(value: Name) {
    this._last_name = value;
  }
  public get middle_name(): Name {
    return this._middle_name;
  }
  public set middle_name(value: Name) {
    this._middle_name = value;
  }
  public get first_name(): Name {
    return this._first_name;
  }
  public set first_name(value: Name) {
    this._first_name = value;
  }
  public get id(): ID {
    return this._id;
  }
  public set id(value: ID) {
    this._id = value;
  }
}
