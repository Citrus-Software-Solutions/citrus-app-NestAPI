import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IJobOffersService } from '../application/job-offers.service.interface';
import { JobOffer } from '../domain/job-offer.model';

@Controller('job-offers')
export class JobOffersController {
  constructor(
    @Inject('JobOfferService')
    private readonly _jobOfferService: IJobOffersService,
  ) {}

  @Post(':employerId')
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

  @Get('employers/:employerId')
  getByEmployerId(
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<JobOffer[]> {
    return this._jobOfferService.getByEmployerId(employerId);
  }
  @Put(':jobOfferId')
  updateJobOffer(
    @Param('jobOfferId', ParseIntPipe) employerId: number,
  ): Promise<string> {
    return this._jobOfferService.updateJobOfferStatus(employerId);
  }
}
