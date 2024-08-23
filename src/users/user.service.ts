import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/createuser-input';
import { GraphQLResolveInfo } from 'graphql';
import { fieldsList, fieldsMap } from 'graphql-fields-list';
@Injectable()
export class UserServiceService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async getUsers(info, limit: number, username?: string): Promise<User[]> {
    const passedFields = fieldsList(info);
    const selectPickerObject = {};

    passedFields.forEach((field) => {
      selectPickerObject[field] = true;
    });

    return this.usersRepository.find({
      take: limit,
      //   where: { username: ILike(`${username}%`) },
      select: selectPickerObject,
    });
  }
  async getUser(userId: number): Promise<User> {
    return await this.usersRepository.findOneById(userId);
  }

  async createPet(createUserInput: CreateUserInput) {
    const userToSave = this.usersRepository.create(createUserInput);
    return this.usersRepository.save(userToSave);
  }
}
