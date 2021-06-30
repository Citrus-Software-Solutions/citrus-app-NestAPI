import { JobOfferEntity } from '../entities/job-offers.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(JobOfferEntity)
export class JobOffersRepository extends Repository<JobOfferEntity> {}
