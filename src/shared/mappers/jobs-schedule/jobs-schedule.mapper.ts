import { JobSchedule } from '../../../jobs-schedule/domain/jobs-schedule.model';
import { Schedule } from '../../../jobs-schedule/domain/value-objects/schedule.vo';
import { JobScheduleEntity } from '../../../jobs-schedule/entities/jobs-schedule.entity';
import { DataMapper } from '../data-mapper.interface';

export class JobScheduleDataMapper
  implements DataMapper<JobSchedule, JobScheduleEntity>
{
  toDomain(entity: JobScheduleEntity): JobSchedule {
    const jobSchedule = new JobSchedule();
    jobSchedule.init_date = Schedule.create(entity.date_ini);
    jobSchedule.end_date = Schedule.create(entity.date_end);

    return jobSchedule;
  }

  toDalEntity(domain: JobSchedule): JobScheduleEntity {
    const jobScheduleEntity = new JobScheduleEntity();
    jobScheduleEntity.date_ini = domain.init_date.value;
    jobScheduleEntity.date_end = domain.end_date.value;

    return jobScheduleEntity;
  }
}
