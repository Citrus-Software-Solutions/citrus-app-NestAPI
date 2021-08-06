import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IAddressPersistence } from '../../shared/address/application/adress.persistence.interface';
import { AddressEntity } from '../../shared/address/entities/address.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { UserPersistenceAdapter } from '../../user/infrastructure/user.persistence.adapter';
import { IEmployersPersistence } from '../application/employers.persistence.interface';
import { EmployerEntity } from '../entities/employers.entity';

@EntityRepository(EmployerEntity)
@Injectable()
export class EmployersPersisteceAdapter
  extends Repository<EmployerEntity>
  implements IEmployersPersistence
{
  constructor(
    @Inject('UserPersistenceAdapter')
    private readonly _userPersistence: UserPersistenceAdapter,
    @Inject('AddressPersistenceAdapter')
    private readonly _addressPersistence: IAddressPersistence,
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
    const userEntity: UserEntity = await this._userPersistence.findOne(userId);

    if (!userEntity) {
      throw new NotFoundException('User for this employer does not exist');
    }

    const createdAddress: AddressEntity =
      await this._addressPersistence.createAddress(employer.address);

    const employerRepository = getRepository(EmployerEntity);
    const savedEmployer: EmployerEntity = await employerRepository.save({
      company_name: employer.company_name,
      address: createdAddress,
      contacts: null,
      skills: null,
      special_requirements: employer.special_requirements,
      status: 0,
      user: userEntity,
    });

    if (!savedEmployer) {
      throw new BadRequestException('Employer could not be created');
    }

    return savedEmployer;
  }
}
