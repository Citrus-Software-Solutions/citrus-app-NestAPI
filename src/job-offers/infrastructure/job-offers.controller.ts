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
import { ReadJobOfferDto } from '../dtos/read-joboffert.dto';

@Controller('job-offers')
export class JobOffersController {
  constructor(
    @Inject('JobOfferService')
    private readonly _jobOfferService: IJobOffersService,
  ) {}

  @Get()
  getAllJobOffers(): Promise<ReadJobOfferDto[]> {
    return this._jobOfferService.getAll();
  }

  @Get('employers/:employerId')
  getByEmployerId(
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<ReadJobOfferDto[]> {
    return this._jobOfferService.getByEmployerId(employerId);
  }

  //podría retornar la oferta con el estatus cambiado
  @Put(':jobOfferId')
  updateJobOfferStatus(
    @Param('jobOfferId', ParseIntPipe) employerId: number,
  ): Promise<string> {
    return this._jobOfferService.updateJobOfferStatus(employerId);
  }

  @Post(':employerId')
  createRole(
    @Body() offer: Partial<JobOffer>,
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<JobOffer> {
    return this._jobOfferService.createOffer(offer, employerId);
  }
}
