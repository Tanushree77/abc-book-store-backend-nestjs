/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { LogTrackerController } from './log_tracker.controller';
import { LogTrackerService } from './log_tracker.service';
import { LogTracker } from './entities/log_tracker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogTracker]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [LogTrackerController],
  providers: [LogTrackerService, JwtHelper]
})
export class LogTrackerModule implements NestModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  configure(consumer: MiddlewareConsumer) {
  }
}
