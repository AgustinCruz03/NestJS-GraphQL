import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  @Field()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;
  @IsString()
  @IsNotEmpty()
  @Field()
  password: string;
  @IsInt()
  @IsOptional()
  @Field((type) => Int, { nullable: true })
  age?: number;
}
