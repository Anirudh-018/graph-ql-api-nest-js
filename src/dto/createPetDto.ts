import { InputType,Field, Int } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CreatePetDto{
    @IsAlpha()
    @Field()
    name:string;
    @IsAlpha()
    @Field()
    breed:string;

    @Field(type=>Int)
    ownerId:number
}