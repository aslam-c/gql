import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserServiceService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/createuser-input';
import { Int } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private userService: UserServiceService) {}

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.userService.getUsers();
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
