import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePetDto } from 'src/dto/createPetDto';
import { Pet } from 'src/entities/pets.entity';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
    constructor(
        @InjectRepository(Pet) 
        private petsRepository:Repository<Pet>,
        private ownerService:OwnersService,
        
    ){}

    async createPet(createInput:CreatePetDto):Promise<Pet>{
        const newPet=this.petsRepository.create(createInput);
        return await this.petsRepository.save(newPet);
    }
    async findAll():Promise<Pet[]>{
        return this.petsRepository.find();
    }

    async findOne(id):Promise<Pet>{
        return this.petsRepository.findOneByOrFail(id);
    }

    async getOwner(ownerId:number):Promise<Owner>{
        return this.ownerService.findOne(ownerId);
    }
}
