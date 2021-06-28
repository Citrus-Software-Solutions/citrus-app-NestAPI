import { JobOfferEntity } from '../../database/dtos/job-offers/job-offers.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(JobOfferEntity)
export class JobOffersRepository extends Repository<JobOfferEntity> {}
