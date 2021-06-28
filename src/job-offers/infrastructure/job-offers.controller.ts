import { Controller, Get, Inject } from '@nestjs/common';
import { JobOffersInteractor } from '../application/job-offert.interactor';
import { JobOffer } from '../domain/job-offer.model';

@Controller('jobOffers')
export class JobOffersController {
  constructor(
    @Inject('GetAllJobOffers')
    private readonly _jobOfferInteractor: JobOffersInteractor,
  ) {}

  @Get('all')
  getAllJobOffers(): Promise<JobOffer[]> {
    return this._jobOfferInteractor.getAll();
  }
}
