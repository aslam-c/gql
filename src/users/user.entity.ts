import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pets/entities/pet.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column({ nullable: true })
  @Field()
  vta: string;

  @Column()
  @Field()
  email: string;

  @Column({ default: true })
  @Field((type) => Boolean, { nullable: true, defaultValue: true })
  is_active?: boolean;

  @OneToOne(() => Pet, (pet) => pet.user)
  pet: Pet;
}
