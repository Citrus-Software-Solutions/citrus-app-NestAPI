import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      //cada vez que importemos este modulo, tendremos una instancia del servicio
      provide: ConfigService,
      useValue: new ConfigService(),
    },
  ],
  //para que se pueda consumir desde otro lugar
  exports: [ConfigService],
})
export class ConfigModule {}
