import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Owner } from "src/owners/entities/owner.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Pet{
    @PrimaryGeneratedColumn()
    @Field()
    id:number;
    @Column()
    @Field()
    name:string;
    @Column({nullable:true})
    @Field({nullable:true})
    breed:string;

    @Column()
    @Field(type=>Int)
    ownerId:number;
    
    @ManyToOne(()=>Owner,owner=>owner.pets)
    @JoinColumn()
    @Field(type=>Owner)
    owner:Owner;
}