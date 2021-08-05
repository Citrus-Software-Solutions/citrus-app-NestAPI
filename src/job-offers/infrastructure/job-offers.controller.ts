import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IJobOffersService } from '../application/job-offers.service.interface';
import { JobOffer } from '../domain/job-offer.model';
import { DataJobOfferDto } from '../dtos/data-joboffer.dto';
import { ReadJobOfferDto } from '../dtos/read-joboffert.dto';

@ApiTags('job-offers')
@Controller('job-offers')
export class JobOffersController {
  constructor(
    @Inject('JobOfferService')
    private readonly _jobOfferService: IJobOffersService,
  ) {}

  @ApiQuery({
    name: 'status',
    description: 'The status of the job offers (0-6)',
    required: false,
    type: Number,
  })
  @ApiQuery({
    name: 'id',
    description: 'The id of a job offer',
    required: false,
    type: Number,
  })
  @Get()
  @ApiOperation({ summary: 'Get all job offers' })
  getAllJobOffers(@Query() query: JSON): Promise<ReadJobOfferDto[]> {
    return this._jobOfferService.getAll(query);
  }

  @Get('employers/:employerId')
  @ApiOperation({ summary: 'Get all offers from a employer' })
  getByEmployerId(
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<ReadJobOfferDto[]> {
    return this._jobOfferService.getByEmployerId(employerId);
  }

  @Get('/:jobOfferId')
  @ApiOperation({ summary: 'Get job offer data by its id' })
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
    @Body() offer: DataJobOfferDto,
    @Param('employerId', ParseIntPipe) employerId: number,
  ): Promise<JobOffer> {
    return this._jobOfferService.createOffer(offer, employerId);
  }
}
