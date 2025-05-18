import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Nest course')
    .setDescription('Api documentation')
    .setVersion('1.0.0')
    .setContact('Andrei', 'http://localhost:8080', '123@mail.con')
    // .addBearerAuth()
    // .addBasicAuth()
    // .addApiKey()
    // .setLicense()
    // .setTermsOfService()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    // include: [], // указываем что попадет в свагер
    // extraModels: [], // указываем что небыло обнаружено 
  });

  SwaggerModule.setup('/docs', app, document)

  await app.listen(process.env.PORT ?? 3000);

}

bootstrap();
