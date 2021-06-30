import { Module } from '@nestjs/common';
import { Configuration } from './config/config.enum';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { EmployersModule } from './employers/employers.module';
import { JobOffersModule } from './job-offers/job-offers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, ConfigModule, JobOffersModule, EmployersModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _confiService: ConfigService) {
    AppModule.port = this._confiService.get(Configuration.PORT);
  }
}
