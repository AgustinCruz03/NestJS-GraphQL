import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
  constructor(
    private userService: UserService,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  async create(createPostInput: CreatePostInput) {
    const newPost = this.postRepository.create(createPostInput);
    return await this.postRepository.save(newPost);
  }
  findUser(userId: string) {
    const userSearched = this.userService.getUserByID(userId);
    if (!userSearched) new BadRequestException('User not found');
    return userSearched;
  }

  async findAll() {
    return await this.postRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
