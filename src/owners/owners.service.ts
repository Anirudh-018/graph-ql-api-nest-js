import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { Pet } from 'src/entities/pets.entity';

@Injectable()
export class OwnersService {
  constructor(@InjectRepository(Owner) private ownerRepository:Repository<Owner>,
  @InjectRepository(Pet) private petRepository:Repository<Pet>){}

  create(createOwnerInput: CreateOwnerInput) {
    const owner=this.ownerRepository.create(createOwnerInput);
    return this.ownerRepository.save(owner);
  }

  findAll() {
    return this.ownerRepository.find();
  }

  findOne(id: number) {
    return this.ownerRepository.findOneBy({id})
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return  this.ownerRepository.update(id,updateOwnerInput);
  }

  remove(id: number) {
    return this.ownerRepository.delete(id);
  }
}
