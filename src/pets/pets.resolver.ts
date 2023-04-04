import { Resolver,Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from 'src/entities/pets.entity';
import { CreatePetDto } from 'src/dto/createPetDto';
import { Owner } from 'src/owners/entities/owner.entity';

@Resolver((of)=>Pet)
export class PetsResolver {
    constructor(
        private petService:PetsService
    ){}

    @Query(returns=>[Pet])
    pets():Promise<Pet[]>{
        return this.petService.findAll()
    }

    @Mutation(returns=>Pet)
    createPet(@Args('createPetInput')createPetInput:CreatePetDto):Promise<Pet>{
        return this.petService.createPet(createPetInput);
    }

    @Query(returns=>Pet)
    getOnePet(@Args('id',{type:()=>Int})id:number):Promise<Pet>{
        return this.petService.findOne(id);
    }

    @ResolveField(returns=>Owner)
    owner(@Parent() pet:Pet):Promise<Owner>{
        return this.petService.getOwner(pet.ownerId);
    }
}
