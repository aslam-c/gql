import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/createuser-input';

@Injectable()
export class UserServiceService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
  async getUser(userId: number): Promise<User> {
    return await this.usersRepository.findOneById(userId);
  }

  async createPet(createUserInput: CreateUserInput) {
    const userToSave = this.usersRepository.create(createUserInput);
    return this.usersRepository.save(userToSave);
  }
}
