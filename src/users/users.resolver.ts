import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserServiceService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/createuser-input';
import { Int } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private userService: UserServiceService) {}

  @Query((returns) => [User])
  users(
    @Context() ctx: any,
    @Args('limit', { type: () => Int }) limit: number,
    @Args('username', { nullable: true }) username?: string,
  ): Promise<User[]> {
    // throw new Error('');

    return this.userService.getUsers(ctx, limit, username);
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
