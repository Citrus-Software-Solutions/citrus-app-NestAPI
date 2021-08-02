import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserPersistenceAdapter } from '../../user/infrastructure/user.persistence.adapter';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IEmployersPersistence } from '../application/employers.persistence.interface';
import { EmployerEntity } from '../entities/employers.entity';
import { UserEntity } from '../../user/entities/user.entity';

@EntityRepository(EmployerEntity)
@Injectable()
export class EmployersPersisteceAdapter
  extends Repository<EmployerEntity>
  implements IEmployersPersistence
{
  constructor(
    @Inject('UserPersistenceAdapter')
    private readonly _userPersistence: UserPersistenceAdapter,
  ) {
    super();
  }
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
  async createEmployer(
    employer: EmployerEntity,
    userId: number,
  ): Promise<EmployerEntity> {
    const userEntity: UserEntity = await this._userPersistence.findOne(userId, {
      where: { role: 'EMPLOYER' },
    });

    if (!userEntity) {
      throw new NotFoundException();
    }

    const employerRepository = getRepository(EmployerEntity);
    const savedEmployer: EmployerEntity = await employerRepository.save({
      company_name: employer.company_name,
      address: employer.address,
      contacts: employer.contacts,
      skills: employer.skills,
      special_requirements: employer.special_requirements,
      status: 0,

      user: userEntity,
    });
    return savedEmployer;
  }
}
