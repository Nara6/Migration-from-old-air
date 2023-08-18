import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000, () => {
    console.log(
      `App running on port ${
        process.env.PORT ? parseInt(process.env.PORT) : 3000
      }`,
    );
  });
}
bootstrap();
