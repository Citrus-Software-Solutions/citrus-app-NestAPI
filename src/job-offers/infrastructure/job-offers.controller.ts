import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { JobOffersInteractor } from '../application/job-offers.interactor';
import { JobOffer } from '../domain/job-offer.model';

@Controller('jobOffers')
export class JobOffersController {
  constructor(
    @Inject('JobOfferService')
    private readonly _jobOfferInteractor: JobOffersInteractor,
  ) {}

  @Post('createOffer/:employerId')
  createRole(
    @Body() offer: Partial<JobOffer>,
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<JobOffer> {
    return this._jobOfferInteractor.createOffer(offer, employerId);
  }

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
}
