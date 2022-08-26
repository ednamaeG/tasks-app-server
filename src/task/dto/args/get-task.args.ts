import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetTaskArgs{
    @Field()
    @IsNotEmpty()
    id: string;
}