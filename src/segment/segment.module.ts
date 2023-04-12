/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { SegmentController } from './segment.controller';
import { SegmentService } from './segment.service';
import { Segment } from './entities/segment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Segment]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [SegmentController],
  providers: [SegmentService, JwtHelper]
})
export class SegmentModule implements NestModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  configure(consumer: MiddlewareConsumer) {
  }
}
