/* eslint-disable prettier/prettier */
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder().setTitle('Nest api').setDescription("Api List").setVersion("1.0").setBasePath('/api/v1').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-list', app, document);
  
  app.setGlobalPrefix("api");
    
    app.enableVersioning({
        type: VersioningType.URI,
        
    });
  await app.listen(3001);
}
bootstrap();
