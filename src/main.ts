import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';
import { generateTypeormConfigFile } from './scripts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microservice = app.connectMicroservice(
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://bwstpcim:ZLwKvA5AI64cEex6dfq7dP7-UAWU7Wp9@gull.rmq.cloudamqp.com/bwstpcim',
        ],
        queue: 'test_queue',
        noAck: false,
        queueOptions: {
          durable: false,
        },
        // Get one by one
        prefetchCount: 1,
      },
    },
    { inheritAppConfig: true },
  );
  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);
  const port = process.env.PORT || 5432;
  app.setGlobalPrefix('api-nest');
  initSwagger(app);
  generateTypeormConfigFile(config);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.startAllMicroservicesAsync();
  await app.listen(port);
  logger.log(`Server is running at ${await app.getUrl()}`);
}
bootstrap();
