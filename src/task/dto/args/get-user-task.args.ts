import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetUserTasksArgs{
    @Field()
    @IsNotEmpty()
    user_id: string;
}