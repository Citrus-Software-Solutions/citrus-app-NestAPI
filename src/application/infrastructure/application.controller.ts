import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IApplicationService } from '../application/application.service.interface';
import { ApplicationResultDto } from '../dtos/application-result.dto';
import { ApplyOfferDto } from '../dtos/apply-offer.dto';

@Controller('application')
export class ApplicationController {
  constructor(
    @Inject('ApplicationService')
    private readonly applicationService: IApplicationService,
  ) {}

  @Post()
  create(
    @Body() applicationData: ApplyOfferDto,
  ): Promise<ApplicationResultDto> {
    return this.applicationService.applyToOffer(applicationData);
  }
}
