import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  id: number;
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int, { nullable: true })
  age?: number;
}
