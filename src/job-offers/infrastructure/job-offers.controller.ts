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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IJobOffersService } from '../application/job-offers.service.interface';
import { JobOffer } from '../domain/job-offer.model';
import { ReadJobOfferDto } from '../dtos/read-joboffert.dto';

@ApiTags('job-offers')
@Controller('job-offers')
export class JobOffersController {
  constructor(
    @Inject('JobOfferService')
    private readonly _jobOfferService: IJobOffersService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all job offers' })
  getAllJobOffers(): Promise<ReadJobOfferDto[]> {
    console.log(this._jobOfferService.getAll());
    return this._jobOfferService.getAll();
  }

  @Get('employers/:employerId')
  @ApiOperation({ summary: 'Get all offers from a employer' })
  getByEmployerId(
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<ReadJobOfferDto[]> {
    return this._jobOfferService.getByEmployerId(employerId);
  }

  @Get('/:jobOfferId')
  getById(
    @Param('jobOfferId', ParseIntPipe) jobOfferId: number,
  ): Promise<ReadJobOfferDto> {
    return this._jobOfferService.getById(jobOfferId);
  }

  //podría retornar la oferta con el estatus cambiado
  @Put(':jobOfferId')
  @ApiOperation({ summary: 'Update job offer status' })
  updateJobOfferStatus(
    @Param('jobOfferId', ParseIntPipe) employerId: number,
  ): Promise<{ message: string }> {
    return this._jobOfferService.updateJobOfferStatus(employerId);
  }

  @Post(':employerId')
  @ApiOperation({ summary: 'Create a job offer' })
  createJobOffer(
    @Body() offer: Partial<JobOffer>,
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<JobOffer> {
    return this._jobOfferService.createOffer(offer, employerId);
  }
}
