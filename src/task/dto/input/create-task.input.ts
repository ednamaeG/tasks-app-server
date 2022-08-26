import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class CreateTaskInput{
    @Field()
    @IsNotEmpty()
    note: string;

    @Field()
    @IsNotEmpty()
    user_id: string;
}