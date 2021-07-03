import { BadRequestException, Injectable } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IEmployersPersistence } from '../application/employers.persistence.interface';
import { EmployerEntity } from '../entities/employers.entity';

@EntityRepository(EmployerEntity)
@Injectable()
export class EmployersPersisteceAdapter
  extends Repository<EmployerEntity>
  implements IEmployersPersistence
{
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
}
