import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IEmployeePersistence } from '../../employee/application/employee.persistence.interface';
import { EmployeeEntity } from '../../employee/entities/employee.entity';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IEmployersPersistence } from '../../employers/application/employers.persistence.interface';
import { EmployerEntity } from '../../employers/entities/employers.entity';
import { IAddressPersistence } from '../../shared/address/application/adress.persistence.interface';
import { AddressEntity } from '../../shared/address/entities/address.entity';
import { IJobOffersPersistence } from '../application/job-offers.persistence.interface';
import { JobOfferStatus } from '../domain/job-offer-status.enum';
import { JobOfferEntity } from '../entities/job-offers.entity';

@EntityRepository(JobOfferEntity)
@Injectable()
export class JobOfferPersistenceAdapter
  extends Repository<JobOfferEntity>
  implements IJobOffersPersistence
{
  constructor(
    @Inject('EmployersPersisteceAdapter')
    private readonly _employersPersistence: IEmployersPersistence,
    @Inject('AddressPersistenceAdapter')
    private readonly _addressPersistence: IAddressPersistence,
    @Inject('EmployeePersistenceAdapter')
    private readonly _employeePersistence: IEmployeePersistence,
  ) {
    super();
  }

  async getJobOffers(query: JSON): Promise<JobOfferEntity[]> {
    const jobOfferRepository = getRepository(JobOfferEntity);
    const jobOffers: JobOfferEntity[] = await jobOfferRepository.find({
      where: query,
    });

    return jobOffers;
  }

  async getByEmployerId(employerId: number): Promise<JobOfferEntity[]> {
    const employer: EmployerEntity =
      await this._employersPersistence.getEmployerById(employerId);

    if (!employer) {
      throw new NotFoundException();
    }

    const jobOfferRepository = getRepository(JobOfferEntity);
    const jobOffers: JobOfferEntity[] = await jobOfferRepository.find({
      relations: ['employer'],
      where: { employer: employer },
    });

    if (!jobOffers) {
      throw new NotFoundException(
        'This employer does not have job offers created',
      );
    }

    return jobOffers;
  }

  async createJobOffer(
    offer: JobOfferEntity,
    employerId: number,
  ): Promise<JobOfferEntity> {
    const employer: EmployerEntity =
      await this._employersPersistence.getEmployerById(employerId);

    if (!employer) {
      throw new NotFoundException('Employer not found');
    }

    const createdAddress: AddressEntity =
      await this._addressPersistence.createAddress(employer.address);

    const jobOfferRepository = getRepository(JobOfferEntity);
    const savedOffer: JobOfferEntity = await jobOfferRepository.save({
      title: offer.title,
      location: createdAddress,
      dead_line: offer.dead_line,
      schedules: offer.schedule,
      skills: offer.skills,
      special_requirements: offer.special_requirements,
      duration: offer.duration,
      hourly_rate: offer.hourly_rate,
      status: offer.status,
      employer: employer,
    });

    if (!savedOffer) {
      throw new BadRequestException('Employer could not be created');
    }

    return savedOffer;
  }

  async getById(offerId: number): Promise<JobOfferEntity> {
    const jobOfferRepository = getRepository(JobOfferEntity);

    const existOffer = await jobOfferRepository.findOne(offerId);

    if (!existOffer) {
      throw new NotFoundException('This offer does not exist');
    }

    return existOffer;
  }

  async updateJobOfferStatus(
    jobOfferId: number,
    jobOfferStatus: number,
  ): Promise<{ message: string }> {
    const jobOfferRepository = getRepository(JobOfferEntity);

    const jobOffer: JobOfferEntity = await jobOfferRepository.findOne(
      jobOfferId,
    );

    if (!jobOffer) {
      throw new NotFoundException();
    }

    let response = 'Status could not be changed';

    if (jobOffer.status in JobOfferStatus) {
      await jobOfferRepository.update(jobOfferId, {
        status: jobOfferStatus,
      });
      response = `Status changed to ${JobOfferStatus[jobOfferStatus]}`;
    }

    return { message: response };
  }
  
  async setEmployeeToJobOffer(
    employeeId: number,
    jobOfferId: number,
  ): Promise<boolean> {
    const jobOfferRepository = getRepository(JobOfferEntity);
    const jobOffer: JobOfferEntity = await jobOfferRepository.findOne(
      jobOfferId,
    );

    if (!jobOffer) {
      throw new NotFoundException('Job Offer does not exists');
    }

    const employee: EmployeeEntity =
      await this._employeePersistence.getEmployeeById(employeeId);

    if (!employee) {
      throw new NotFoundException('Employee does not exists');
    }

    console.log(jobOffer);

    jobOffer.employee = employee;

    jobOffer.save();

    const updateJobOffer = jobOffer.save();

    if (updateJobOffer) {
      return true;
    } else {
      return false;
    }

  async updateJobOffer(
    jobOfferId: number,
    jobOffer: JobOfferEntity,
  ): Promise<JobOfferEntity> {
    const jobOfferRepository = getRepository(JobOfferEntity);
    const foundOffer = await jobOfferRepository.findOne(jobOfferId);

    if (!foundOffer) {
      throw new NotFoundException('Job offer does not exists');
    }

    if (jobOffer.title) {
      foundOffer.title = jobOffer.title;
    }

    if (jobOffer.location) {
      foundOffer.location = jobOffer.location;
    }

    if (jobOffer.dead_line) {
      foundOffer.dead_line = jobOffer.dead_line;
    }

    if (jobOffer.schedule) {
      foundOffer.schedule = jobOffer.schedule;
    }

    if (jobOffer.skills) {
      foundOffer.skills = jobOffer.skills;
    }

    if (jobOffer.special_requirements) {
      foundOffer.special_requirements = jobOffer.special_requirements;
    }

    if (jobOffer.duration) {
      foundOffer.duration = jobOffer.duration;
    }

    if (jobOffer.hourly_rate) {
      foundOffer.hourly_rate = jobOffer.hourly_rate;
    }
    const updateOffer = await jobOfferRepository.save(foundOffer);

    return updateOffer;
  }
}
