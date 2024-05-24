import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query((returns) => [User])
  users() {
    return this.userService.getUsers();
  }
  @Query((returns) => User)
  user(@Args('id') id: string) {
    return this.userService.getUserByID(id);
  }
  @Mutation((returns) => User)
  createUser(@Args('user') user: UserDto) {
    return this.userService.createUser(user);
  }
  @ResolveField()
  post(@Parent() user: User) {
    return this.userService.getPost(user.id);
  }
}
