import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  getUsers(): User[] {
    return [
      {
        id: '59258632-0f94-481b-8468-043ad332368b',
        username: 'juan',
        email: 'juan@mail.com',
        password: '123',
        age: 40,
      },
      {
        id: '0e3c7853-7053-4aaf-b732-8d120cf2d7ec',
        username: 'pedro',
        email: 'pedro@mail.com',
        password: '123',
      },
    ];
  }
}
