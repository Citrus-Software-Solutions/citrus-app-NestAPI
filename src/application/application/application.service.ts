import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Application } from '../domain/application.model';
import { ApplicationResultDto } from '../dtos/application-result.dto';
import { ApplyOfferDto } from '../dtos/apply-offer.dto';
import { IApplicationRepository } from './application.repository.interface';
import { IApplicationService } from './application.service.interface';

@Injectable()
export class ApplicationService implements IApplicationService {
  constructor(
    @Inject('ApplicationRepository')
    private readonly applicationRepository: IApplicationRepository,
  ) {}

  async applyToOffer(
    applicationData: ApplyOfferDto,
  ): Promise<ApplicationResultDto> {
    const applicationDateInString = applicationData.applicationDate;
    if (!applicationData.employeeId) {
      throw new BadRequestException('Employee Id can not be empty');
    }
    if (!applicationData.offerId) {
      throw new NotFoundException('Offer Id can not be empty');
    }
    if (!applicationDateInString) {
      throw new NotFoundException('Date not provided');
    }
    const applicationDate = new Date(applicationDateInString);
    const savedApplication: Application =
      await this.applicationRepository.createApplication(
        applicationData.employeeId,
        applicationData.offerId,
        applicationDate,
      );

    return plainToClass(ApplicationResultDto, savedApplication);
  }
}
