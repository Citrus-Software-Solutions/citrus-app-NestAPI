import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IAddressPersistence } from '../../shared/address/application/adress.persistence.interface';
import { AddressEntity } from '../../shared/address/entities/address.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IEmployeePersistence } from '../application/employee.persistence.interface';
import { EmployeeEntity } from '../entities/employee.entity';
import { UserPersistenceAdapter } from '../../user/infrastructure/user.persistence.adapter';

@EntityRepository(EmployeeEntity)
@Injectable()
export class EmployeePersistenceAdapter
  extends Repository<EmployeeEntity>
  implements IEmployeePersistence
{
  constructor(
    @Inject('UserPersistenceAdapter')
    private readonly _userPersistence: UserPersistenceAdapter,
    @Inject('AddressPersistenceAdapter')
    private readonly _addressPersistence: IAddressPersistence,
  ) {
    super();
  }
  async getEmployees(): Promise<EmployeeEntity[]> {
    const employeeRepository = getRepository(EmployeeEntity);
    const employees: EmployeeEntity[] = await employeeRepository.find();
    return employees;
  }

  async getEmployeeById(employeeId: number): Promise<EmployeeEntity> {
    if (!employeeId) {
      throw new BadRequestException('id must be sent');
    }

    const employeeRepository = getRepository(EmployeeEntity);
    const employee: EmployeeEntity = await employeeRepository.findOne(
      employeeId,
    );

    return employee;
  }

  async createEmployee(
    employee: EmployeeEntity,
    userId: number,
  ): Promise<EmployeeEntity> {
    const userEntity: UserEntity = await this._userPersistence.getById(userId);

    if (!userEntity) {
      throw new NotFoundException('User for this employer does not exist');
    }

    const createdAddress: AddressEntity =
      await this._addressPersistence.createAddress(employee.address);

    const employeeRepository = getRepository(EmployeeEntity);
    const savedEmployee: EmployeeEntity = await employeeRepository.save({
      first_name: employee.first_name,
      middle_name: employee.middle_name,
      last_name: employee.last_name,
      phone_number: employee.phone_number,
      birth_date: employee.birth_date,
      address: createdAddress,
      ssn: employee.ssn,
      education_level: employee.education_level,
      work_experiences: null,
      skills: null,
      references: null,
      rating: 0,
      status: 0,
      user: userEntity,
    });

    if (!savedEmployee) {
      throw new BadRequestException('Employee could not be created');
    }

    return savedEmployee;
  }
}
