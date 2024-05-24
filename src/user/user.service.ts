import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  getUsers(): User[] {
    return [
      {
        id: 1,
        username: 'juan',
        email: 'juan@mail.com',
        password: '123',
        age: 40,
      },
      { id: 2, username: 'pedro', email: 'pedro@mail.com', password: '123' },
    ];
  }
}
