import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IJobOffersService } from '../application/job-offers.service.interface';
import { CreatedJobOfferDto } from '../dtos/created-job-offer.dto';
import { DataJobOfferDto } from '../dtos/data-joboffer.dto';
import { JobOfferStatusDTO } from '../dtos/job-offer-status.dto';
import { ReadJobOfferDto } from '../dtos/read-joboffert.dto';
import { ShowJobOfferDto } from '../dtos/show-job-offer.dto';
import { UpdateJobOfferDto } from '../dtos/update-job-offer.dto';

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

  @Patch('data/:jobOfferId')
  @ApiOperation({ summary: 'Update job offer information' })
  updateJobOfferData(
    @Param('jobOfferId', ParseIntPipe) jobOfferId: number,
    @Body() jobOffer: UpdateJobOfferDto,
  ): Promise<ShowJobOfferDto> {
    return this._jobOfferService.updateJobOffer(jobOfferId, jobOffer);
  }

  //podr??a retornar la oferta con el estatus cambiado
  @Put(':jobOfferId')
  @ApiOperation({ summary: 'Update job offer status (0-6)' })
  updateJobOfferStatus(
    @Body() jobOfferStatusObject: JobOfferStatusDTO,
    @Param('jobOfferId', ParseIntPipe) jobOfferId: number,
  ): Promise<{ message: string }> {
    return this._jobOfferService.updateJobOfferStatus(
      jobOfferId,
      jobOfferStatusObject.status,
    );
  }

  @Post('/:employerId')
  @ApiOperation({ summary: 'Create a job offer' })
  createJobOffer(
    @Param('employerId', ParseIntPipe) employerId: number,
    @Body() jobOffer: DataJobOfferDto,
  ): Promise<CreatedJobOfferDto> {
    return this._jobOfferService.createJobOffer(jobOffer, employerId);
  }

  @EventPattern('Application')
  async handleNewWorker(data: any) {
    console.log(data);
    console.log(data[0].employee.id);
    console.log(data[0].jobOffer.id);
    const message = await this._jobOfferService.registerWorker(
      data[0].employee.id,
      data[0].jobOffer.id,
    );
    console.log(message);
  }
}
