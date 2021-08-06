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
import { AddressEntity } from '../../shared/address/entities/address.entity';
import { IAddressPersistence } from '../../shared/address/application/adress.persistence.interface';

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

  async getEmployerByUserId(userId: number): Promise<EmployerEntity> {
    const employerRepository = getRepository(EmployerEntity);
    const employer: EmployerEntity = await employerRepository.findOne(userId);

    return employer;
  }

  async updateEmployer(
    employerId: number,
    employer: EmployerEntity,
  ): Promise<EmployerEntity> {
    const employerRepository = getRepository(EmployerEntity);
    const foundUser = await employerRepository.findOne(employerId, {
      where: { status: 0 },
    });

    console.log(foundUser);

    if (!foundUser) {
      throw new NotFoundException('Employer does not exists');
    }

    foundUser.company_name = employer.company_name;
    foundUser.address = employer.address;
    foundUser.special_requirements = employer.special_requirements;

    console.log(foundUser);

    const updateUser = await employerRepository.save(foundUser);

    console.log(updateUser);

    return updateUser;
  }

  async createEmployer(
    employer: EmployerEntity,
    userId: number,
  ): Promise<EmployerEntity> {
    const userEntity: UserEntity = await this._userPersistence.getById(userId);

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
