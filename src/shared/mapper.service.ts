import { Injectable } from '@nestjs/common';
import { JobOfferEntity } from 'src/job-offers/entities/job-offers.entity';
import { JobOffer } from 'src/job-offers/domain/job-offer.model';
import { TypeMapper } from 'ts-mapper';

@Injectable()
export class MapperService extends TypeMapper {
  constructor() {
    super();
    this.config();
  }

  private config(): void {
    this.createMap<JobOfferEntity, JobOffer>()
      .map(
        (entity) => entity.id,
        (model) => model.id,
      )
      .map(
        (entity) => entity.name,
        (model) => model.name,
      )
      .map(
        (entity) => entity.description,
        (model) => model.description,
      )
      .map(
        (entity) => entity.available_vacans,
        (model) => model.available_vacans,
      )
      .map(
        (entity) => entity.date_begin,
        (model) => model.date_begin,
      )
      .map(
        (entity) => entity.date_end,
        (model) => model.date_end,
      )
      .map(
        (entity) => entity.status,
        (model) => model.status,
      )
      .map(
        (entity) => entity.gender,
        (model) => model.gender,
      )
      .map(
        (entity) => entity.salary,
        (model) => model.salary,
      )
      .map(
        (entity) => entity.min_age,
        (model) => model.min_age,
      )
      .map(
        (entity) => entity.min_age,
        (model) => model.min_age,
      );
  }
}
