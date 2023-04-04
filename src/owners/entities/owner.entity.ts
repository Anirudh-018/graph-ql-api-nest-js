import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/entities/pets.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(type=>Int)
  id:number;

  @Column()
  @Field()
  name:string;

  @OneToMany(()=>Pet,(pet)=>pet.owner,{
    eager:true
  })
 
  @Field(type=>[Pet],{nullable:true})
  pets:Pet[];
}
