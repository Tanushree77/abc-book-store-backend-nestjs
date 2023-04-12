/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { SnoozeController } from './snooze.controller';
import { SnoozeService } from './snooze.service';
import { Snooze } from './entities/snooze.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Snooze]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [SnoozeController],
  providers: [SnoozeService, JwtHelper]
})
export class SnoozeModule implements NestModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  configure(consumer: MiddlewareConsumer) {
  }
}
