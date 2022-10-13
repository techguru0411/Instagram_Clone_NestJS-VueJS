import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:8080',
    credentials: true,
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();


/**
 *  valdiate Sign Up ------ (Done)
    createdAt updatedAt ------ (Done)
    update created time in main page  ------ (Done)
    time ago in comment ------ (Done)
 *  unique username validate ------ (Done)
    User page
    Search User
    View 1 task
    Regex username, username cant have space
 */