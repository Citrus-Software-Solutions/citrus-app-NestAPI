import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IApplicationService } from '../application/application.service.interface';
import { Application } from '../domain/application.model';

@Controller('application')
export class ApplicationController {
  constructor(
    @Inject('ApplicationService')
    private readonly applicationService: IApplicationService,
  ) {}

  @Post()
  create(@Body() applicationData: Application): Promise<Application> {
    return this.applicationService.applyToOffer(applicationData);
  }
}
