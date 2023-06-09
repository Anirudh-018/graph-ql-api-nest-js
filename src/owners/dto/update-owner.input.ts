import { Pet } from 'src/entities/pets.entity';
import { CreateOwnerInput } from './create-owner.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  @Field()
  id:number;
  @Field()
  name:string;
}
