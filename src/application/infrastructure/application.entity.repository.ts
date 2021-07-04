import { EntityRepository, Repository } from 'typeorm';
import { ApplicationEntity } from '../entities/application.entity';

@EntityRepository(ApplicationEntity)
export class ApplicationEntityRepository extends Repository<ApplicationEntity> {}
