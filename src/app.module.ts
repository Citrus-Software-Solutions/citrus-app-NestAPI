import { Module } from '@nestjs/common';
import { Configuration } from './config/config.enum';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { EmployersModule } from './employers/employers.module';
import { JobOffersModule } from './job-offers/job-offers.module';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule,
    JobOffersModule,
    EmployersModule,
    EmployeeModule,
    ApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _confiService: ConfigService) {
    AppModule.port = this._confiService.get(Configuration.PORT);
  }
}
