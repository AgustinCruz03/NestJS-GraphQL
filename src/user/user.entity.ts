import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity({
  name: 'users',
})
@ObjectType()
export class User {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @PrimaryGeneratedColumn('uuid')
  @Field((type) => Int)
  id: string = uuid();

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column({ nullable: true })
  @Field((type) => Int, { nullable: true })
  age?: number;
}
