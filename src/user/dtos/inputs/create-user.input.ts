import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class CreateUserInput{
    @Field()
    @IsNotEmpty()
    first_name: string;

    @Field()
    @IsNotEmpty()
    last_name: string;


    @Field()
    @IsNotEmpty()
    email: string;

    @Field()
    @IsNotEmpty()
    password: string;

}