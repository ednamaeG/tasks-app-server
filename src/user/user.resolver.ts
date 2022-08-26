import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dtos/inputs/create-user.input';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver(User)
export class UserResolver {
    constructor(private service : UserService){}


    @Mutation(() => User , {name: 'register' , nullable: true})
    async  createTask(@Args() createUserInput: CreateUserInput): Promise<any>{
        return await this.service.createUser(createUserInput);
    }
}
