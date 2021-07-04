import { AlreadyAppliedOfferDto } from '../dtos/already-applied.dto';
import { ApplicationResultDto } from '../dtos/application-result.dto';
import { ApplyOfferDto } from '../dtos/apply-offer.dto';

export interface IApplicationService {
  applyToOffer(application: ApplyOfferDto): Promise<ApplicationResultDto>;
  alreadyApplied(data: AlreadyAppliedOfferDto): Promise<boolean>;
}
