import { Field, InputType, Int } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid';

@InputType()
export class UserDto {
  @Field()
  username: string = uuid();
  @Field()
  email: string;
  @Field()
  password: string;
  @Field((type) => Int, { nullable: true })
  age?: number;
}
