import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { initSwagger } from './app.swagger';
import { generateTypeormConfigFile } from './scripts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);
  const port = process.env.PORT || 5432;
  app.setGlobalPrefix('api-nest');
  // initSwagger(app);
  generateTypeormConfigFile(config);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(port);
  logger.log(`Server is running at ${await app.getUrl()}`);
}
bootstrap();
