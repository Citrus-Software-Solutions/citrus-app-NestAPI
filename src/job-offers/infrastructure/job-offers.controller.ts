import { Controller, Get, Inject, Param, ParseIntPipe, Put } from '@nestjs/common';
import { JobOffersInteractor } from '../application/job-offers.interactor';
import { JobOffer } from '../domain/job-offer.model';

@Controller('jobOffers')
export class JobOffersController {
  constructor(
    @Inject('JobOfferService')
    private readonly _jobOfferInteractor: JobOffersInteractor,
  ) { }

  @Get('all')
  getAllJobOffers(): Promise<JobOffer[]> {
    return this._jobOfferInteractor.getAll();
  }

  @Get(':employerId')
  getByEmployerId(
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<JobOffer[]> {
    return this._jobOfferInteractor.getByEmployerId(employerId);
  }
  @Put(':jobOfferId')
  updateJobOffer(
    @Param('jobOfferId', ParseIntPipe) employerId: number,
  ): Promise<JobOffer> {
    return this._jobOfferInteractor.getJobOfferEntityById(employerId);
  }
}
