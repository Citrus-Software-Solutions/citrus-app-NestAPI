import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IApplicationService } from '../application/application.service.interface';
import { AlreadyAppliedOfferDto } from '../dtos/already-applied.dto';
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

  @Post('applied')
  applied(@Body() data: AlreadyAppliedOfferDto): Promise<boolean> {
    return this.applicationService.alreadyApplied(data);
  }
}
