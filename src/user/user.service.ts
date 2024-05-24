import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { Post } from 'src/post/entities/post.entity';

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
  async getPost(userId: string) {
    return this.postRepository.find({ where: { userId: userId } });
  }
}
