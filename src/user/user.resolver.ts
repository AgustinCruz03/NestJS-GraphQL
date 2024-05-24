import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query((returns) => [User])
  users() {
    return this.userService.getUsers();
  }
}
