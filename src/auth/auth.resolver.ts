import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ValidateUserInput } from 'src/user/dtos/inputs/validate-user.input';
import { User } from 'src/user/models/user.model';
import { AuthService } from './auth.service';

@Resolver(User)
export class AuthResolver {
    constructor(private service: AuthService){

    }

    @Mutation(() => User , {name: 'login' , nullable: true})
    async  createTask(@Args() validateUserInput: ValidateUserInput): Promise<User>{
        return await this.service.validateUser(validateUserInput);
    }
}
