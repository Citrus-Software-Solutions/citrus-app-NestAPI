import { DataMapper } from '../../../shared/mappers/data-mapper.interface';
import { JobOfferDataMapper } from '../../../shared/mappers/job-offers/job-offers.mapper';
import { EmployeeDataMapper } from '../employee/employee.data-mapper';
import { Application } from '../../../application/domain/application.model';
import { ApplicationEntity } from '../../../application/entities/application.entity';

export class ApplicationDataMapper
  implements DataMapper<Application, ApplicationEntity>
{
  employeeMapper = new EmployeeDataMapper();
  jobOfferMapper = new JobOfferDataMapper();
  public toDomain(entity: ApplicationEntity): Application {
    const application = new Application(
      entity.id,
      entity.status,
      entity.date_aplication,
      //this.employeeMapper.toDomain(entity.employee),
      //this.jobOfferMapper.toDomain(entity.jobOffer),
    );

    return application;
  }

  public toDalEntity(application: Application): ApplicationEntity {
    const applicationEntity = new ApplicationEntity();
    applicationEntity.id = application.id;
    applicationEntity.status = application.status;
    applicationEntity.date_aplication = application.dateApplication;
    // applicationEntity.employee = this.employeeMapper.toDalEntity(
    //   application.employee,
    // );
    // applicationEntity.jobOffer = this.jobOfferMapper.toDalEntity(
    //   application.jobOffer,
    // );
    return applicationEntity;
  }
}
