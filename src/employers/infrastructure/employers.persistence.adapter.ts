import { BadRequestException, Injectable } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { SpecialRequirement } from '../../shared/domain/special-requirement.vo';
import { AddressDataMapper } from '../../shared/mappers/address/address.data-mapper';
import { ContactInformationDataMapper } from '../../shared/mappers/employer/contact-information.mapper';
import { SkillDataMapper } from '../../shared/mappers/skill/skill.data-mapper';
import { ReadSkillDto } from '../../shared/skill/dtos/read-skill.dto';
import { IEmployersPersistence } from '../application/employers.persistence.interface';
import { EmployerStatusEnum } from '../domain/employer-status.enum';
import { CreateEmployerDto } from '../dtos/create-employer.dto';
import { ReadContactInformationDto } from '../dtos/read-contact-information.dto';
import { ReadEmployerDto } from '../dtos/read-employer.dto';
import { EmployerEntity } from '../entities/employers.entity';

@EntityRepository(EmployerEntity)
@Injectable()
export class EmployersPersisteceAdapter
  extends Repository<EmployerEntity>
  implements IEmployersPersistence
{
  private readonly _addressMapper: AddressDataMapper;
  private readonly _contactInformationMapper: ContactInformationDataMapper;
  private readonly _skillMapper: SkillDataMapper;

  async getEmployers(): Promise<EmployerEntity[]> {
    const employerRepository = getRepository(EmployerEntity);
    const employers: EmployerEntity[] = await employerRepository.find();
    return employers;
  }

  async getEmployerById(employerId: number): Promise<EmployerEntity> {
    if (!employerId) {
      throw new BadRequestException('id must be sent');
    }

    const employerRepository = getRepository(EmployerEntity);
    const employer: EmployerEntity = await employerRepository.findOne(
      employerId,
    );

    return employer;
  }

  async saveEmployer(employer: CreateEmployerDto): Promise<ReadEmployerDto> {
    if (!employer) {
      throw new BadRequestException();
    }

    const employerRepository = getRepository(EmployerEntity);
    const savedEmployer: EmployerEntity = await employerRepository.save(
      this.employerDtoToEntity(employer),
    );
    const employerDto = new CreateEmployerDto();
    employerDto.id = savedEmployer.id;
    return employerDto;
  }

  private employerDtoToEntity(employerDto: CreateEmployerDto): EmployerEntity {
    const employerEntity = new EmployerEntity();

    employerEntity.id = employerDto.id;
    employerEntity.company_name = employerDto.company_name.value;
    employerEntity.logo = employerDto.logo;

    employerEntity.special_requirements = employerDto.special_requirements.map(
      (specialRequirement: SpecialRequirement) => specialRequirement.value,
    );

    employerEntity.status = EmployerStatusEnum[employerDto.status];

    employerEntity.address = this._addressMapper.toDalEntity(
      this._addressMapper.ReadDTOtoDomain(employerDto.address),
    );

    employerEntity.contacts = employerDto.contacts.map(
      (contact: ReadContactInformationDto) =>
        this._contactInformationMapper.toDalEntity(
          this._contactInformationMapper.ReadDTOtoDomain(contact),
        ),
    );

    employerEntity.skills = employerDto.skills.map((skill: ReadSkillDto) =>
      this._skillMapper.toDalEntity(this._skillMapper.ReadDTOtoDomain(skill)),
    );

    return employerEntity;
  }
}
