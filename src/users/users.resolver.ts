import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  Int,
  Info,
  ResolveField,
  Parent,
  //   GraphQLResolveInfo,
} from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { UserServiceService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/createuser-input';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

@Resolver()
export class UsersResolver {
  constructor(private userService: UserServiceService) {}

  @Query((returns) => [User])
  users(
    @Info() info: string[],
    @Args('limit', { type: () => Int }) limit: number,
    @Args('username', { nullable: true }) username?: string,
  ): Promise<User[]> {
    return this.userService.getUsers(info, limit, username);
  }
  @Query((returns) => User)
  getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.getUser(id);
  }
  @Mutation((returns) => User)
  createUser(@Args('Input') createUserInput: CreateUserInput) {
    return this.userService.createPet(createUserInput);
  }
}
