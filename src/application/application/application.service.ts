import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Application } from '../domain/application.model';
import { IApplicationRepository } from './application.repository.interface';
import { IApplicationService } from './application.service.interface';

@Injectable()
export class ApplicationService implements IApplicationService {
  constructor(
    @Inject('ApplicationRepository')
    private readonly applicationRepository: IApplicationRepository,
  ) {}

  async applyToOffer(applicationData: Application): Promise<Application> {
    if (!applicationData.jobOffer) {
      throw new BadRequestException('Offer can not be empty');
    }
    if (!applicationData.employee) {
      throw new NotFoundException('Employee can not be empty');
    }

    const savedApplication: Application =
      await this.applicationRepository.createApplication(applicationData);
    return savedApplication;
  }
}
