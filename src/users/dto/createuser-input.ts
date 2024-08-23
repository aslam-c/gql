import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsAlpha()
  @Field()
  username: string;

  @Field()
  @IsEmail()
  email: string;
}
