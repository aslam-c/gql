import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UserServiceService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UserServiceService],
  exports: [UserServiceService],
})
export class UsersModule {}
