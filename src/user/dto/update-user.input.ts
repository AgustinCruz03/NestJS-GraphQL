import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { UserDto } from './user.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(UserDto) {
  @IsNotEmpty()
  @IsUUID()
  @Field()
  id: string;
}
