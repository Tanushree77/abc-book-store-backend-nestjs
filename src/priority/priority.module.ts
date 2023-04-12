/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { PriorityController } from './priority.controller';
import { PriorityService } from './priority.service';
import { Priority } from './entities/priority.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Priority]),
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
  ],
  controllers: [PriorityController],
  providers: [PriorityService, JwtHelper],
})
export class PriorityModule implements NestModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  configure(consumer: MiddlewareConsumer) {}
}
