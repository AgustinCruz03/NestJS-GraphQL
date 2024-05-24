import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  title: string;
  @IsString()
  @IsNotEmpty()
  @Field()
  description: string;
  @IsNotEmpty()
  @Field()
  userId: string;
}
