import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreatePostInput } from './create-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @IsUUID()
  @IsNotEmpty()
  @Field()
  id: string;
}
