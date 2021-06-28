import { Injectable } from '@nestjs/common';
import { JobOffer } from '../domain/job-offer.model';
import { JobOffersRepository } from '../infrastructure/job-offers.repository';
import { JobOffersInteractor } from './job-offert.interactor';

@Injectable()
export class GetAllJobOffers implements JobOffersInteractor {
  //private jobOffers: JobOffer[] = [];

  constructor(private readonly _jobOffersRepository: JobOffersRepository) {}

  async getAll(): Promise<JobOffer[]> {
    const jobOffers: JobOffer[] = await this._jobOffersRepository.find();
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
    return jobOffers;
  }
}
