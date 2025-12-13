import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AdminUserController } from './admin-user-controller.controller';
import { ClientUserController } from './clinet-user-controller.controller';


@Module({
  imports :[TypeOrmModule.forFeature([User])],
  controllers: [UsersController, AdminUserController,ClientUserController],
  providers: [UsersService]
})
export class UsersModule {}
