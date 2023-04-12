/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Roles } from './entities/roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roles]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [RolesController],
  providers: [RolesService, JwtHelper]
})
export class RolesModule implements NestModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  configure(consumer: MiddlewareConsumer) {
  }
}
