import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query((returns) => [User])
  users() {
    return this.userService.getUsers();
  }
  @Mutation((returns) => User)
  createUser(@Args('user') user: UserDto) {
    return this.userService.createUser(user);
  }
}
