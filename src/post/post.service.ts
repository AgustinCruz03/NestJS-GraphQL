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

  async findOne(id: string) {
    return await this.postRepository.findOne({where:{id}});
  }

  async update(updatePostInput: UpdatePostInput) {
    const {id, ...updateObject} = updatePostInput 
    const postExist = await this.postRepository.findOne({where:{id}})
    
    if(!postExist){
      throw new BadRequestException('No existe ese post')
    }
    await this.postRepository.update(id,updateObject)
    
    return await this.findOne(id);
  }

  async remove(id: string) {
    const postExist = await this.postRepository.findOne({where:{id}})

    if(!postExist){
      throw new BadRequestException('No existe ese post')
    }

    await this.postRepository.delete(id)
    return postExist;
  }
}
