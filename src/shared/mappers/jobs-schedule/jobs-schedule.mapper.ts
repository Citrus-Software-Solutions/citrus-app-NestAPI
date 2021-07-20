import { JobSchedule } from '../../../jobs-schedule/domain/jobs-schedule.model';
import { Schedule } from '../../../jobs-schedule/domain/value-objects/schedule.vo';
import { JobScheduleEntity } from '../../../jobs-schedule/entities/jobs-schedule.entity';
import { DataMapper } from '../data-mapper.interface';

export class JobScheduleDataMapper
  implements DataMapper<JobSchedule, JobScheduleEntity>
{
  toDomain(entity: JobScheduleEntity): JobSchedule {
    const jobSchedule = new JobSchedule();
    jobSchedule.dates = Schedule.create(entity.date_ini, entity.date_end);

    return jobSchedule;
  }

  toDalEntity(domain: JobSchedule): JobScheduleEntity {
    const jobScheduleEntity = new JobScheduleEntity();
    jobScheduleEntity.date_ini = domain.dates.fecha_ini;
    jobScheduleEntity.date_end = domain.dates.fecha_fin;

    return jobScheduleEntity;
  }
}
