import { Module } from '@nestjs/common';
import { EventsGateway } from '../events/events.gateway';
import { EventsModule } from '../events/events.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [EventsModule],
  providers: [UsersService, EventsGateway],
  controllers: [UsersController],
})
export class UsersModule {}
