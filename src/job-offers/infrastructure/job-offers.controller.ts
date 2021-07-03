import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { IJobOffersService } from '../application/job-offers.service.interface';
import { JobOffer } from '../domain/job-offer.model';

@Controller('jobOffers')
export class JobOffersController {
  constructor(
    @Inject('JobOfferService')
    private readonly _jobOfferService: IJobOffersService,
  ) {}

  @Post('createOffer/:employerId')
  createRole(
    @Body() offer: JobOffer,
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<JobOffer> {
    return this._jobOfferService.createOffer(offer, employerId);
  }

  @Get()
  getAllJobOffers(): Promise<JobOffer[]> {
    return this._jobOfferService.getAll();
  }

  @Get('offersOf/:employerId')
  getByEmployerId(
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<JobOffer[]> {
    return this._jobOfferService.getByEmployerId(employerId);
  }
}
