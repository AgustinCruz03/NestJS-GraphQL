import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { Post } from 'src/post/entities/post.entity';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  async getUsers(): Promise<Omit<User, 'password'>[]> {
    return this.userRepository.find();
  }
  async getUserByID(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }
  async createUser(user: UserDto): Promise<User> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }
  async update(updateUserInput:UpdateUserInput){
    const {id, ...updateObject} = updateUserInput
    const user = this.userRepository.findOne({where:{id}})
    if(!user){
      throw new BadRequestException('No existe ese usuario')
    }
    await this.userRepository.update(id,updateObject)
    return this.getUserByID(id)
  }
  async getPost(userId: string) {
    return this.postRepository.find({ where: { userId: userId } });
  }
}
