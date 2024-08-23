import { Injectable } from '@nestjs/common';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';
import { User } from 'src/users/user.entity';
import { UserServiceService } from 'src/users/user.service';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private userService: UserServiceService,
  ) {}

  create(createPetInput: CreatePetInput) {
    return 'This action adds a new pet';
  }

  findAll() {
    return this.petRepository.find();
    // return `This action returns all pets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }

  getOwner(id) {
    return this.userService.getUser(id);
  }
}
