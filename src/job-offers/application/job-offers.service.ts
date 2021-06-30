import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EmployerEntity } from '../../employers/entities/employers.entity';
import { EmployersRepository } from '../../employers/infrastructure/employers.repository';
import { MapperService } from '../../shared/mapper.service';
import { JobOffer } from '../domain/job-offer.model';
import { JobOfferEntity } from '../entities/job-offers.entity';
import { JobOffersRepository } from '../infrastructure/job-offers.repository';
import { JobOffersInteractor } from './job-offers.interactor';

@Injectable()
export class JobOfferService implements JobOffersInteractor {
  //private jobOffers: JobOffer[] = [];

  constructor(
    private readonly _jobOffersRepository: JobOffersRepository,
    private readonly _employerRepository: EmployersRepository,
    private readonly _mapper: MapperService,
  ) {}

  async getAll(): Promise<JobOffer[]> {
    const jobOffers: JobOfferEntity[] = await this._jobOffersRepository.find();
    // const offerOne = {
    //   id: 1,
    //   name: 'Oferta 1',
    //   description: 'descripción oferta 1',
    // };
    // this.jobOffers.push(offerOne);
    // const offerTwo = {
    //   id: 2,
    //   name: 'Oferta 2',
    //   description: 'descripción oferta 2',
    // };
    // this.jobOffers.push(offerTwo);
    // const offerThree = {
    //   id: 3,
    //   name: 'Oferta 3',
    //   description: 'descripción oferta 3',
    // };
    // this.jobOffers.push(offerThree);
    return this._mapper.mapCollection<JobOfferEntity, JobOffer>(
      jobOffers,
      new JobOffer(),
    );
  }

  async getByEmployerId(employerId: number): Promise<JobOffer[]> {
    if (!employerId) {
      throw new BadRequestException('id must be sent');
    }

    const employerExist: EmployerEntity =
      await this._employerRepository.findOne(employerId);

    if (!employerExist) {
      throw new NotFoundException();
    }

    const jobOffers: JobOfferEntity[] = await this._jobOffersRepository.find({
      relations: ['employer'],
      where: { employer: employerExist },
    });

    if (!jobOffers) {
      throw new NotFoundException(
        'This employer does not have job offers created',
      );
    }

    return jobOffers;
  }
}
