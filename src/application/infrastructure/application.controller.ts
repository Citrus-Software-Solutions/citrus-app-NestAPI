import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IApplicationService } from '../application/application.service.interface';
import { ApplicationResultDto } from '../dtos/application-result.dto';
import { ApplyOfferDto } from '../dtos/apply-offer.dto';

@ApiTags('Job Application')
@Controller('application')
export class ApplicationController {
  constructor(
    @Inject('ApplicationService')
    private readonly applicationService: IApplicationService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Apply to an offer' })
  create(
    @Body() applicationData: ApplyOfferDto,
  ): Promise<ApplicationResultDto> {
    return this.applicationService.applyToOffer(applicationData);
  }
}
