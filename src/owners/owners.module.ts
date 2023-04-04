import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { PetsService } from 'src/pets/pets.service';
import { Pet } from 'src/entities/pets.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Owner,Pet])],
  providers: [OwnersResolver, OwnersService,PetsService],
  exports:[OwnersService]
})
export class OwnersModule {}
