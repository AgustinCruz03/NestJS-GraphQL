import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity({
  name: 'users',
})
@ObjectType()
export class User {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @PrimaryGeneratedColumn('uuid')
  @Field()
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

  @OneToMany(() => Post, (post) => post.user)
  @Field(() => [Post], { nullable: true })
  post: Post[];
}
