import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/models/user.model';
import { ValidateUserInput } from 'src/user/dtos/inputs/validate-user.input';
import { CreateUserInput } from 'src/user/dtos/inputs/create-user.input';

@Injectable()
export class AuthService {

    constructor(private userService: UserService) { }
    async validateUser(validateUser: ValidateUserInput): Promise<User> {
        let user = await this.userService.findOneByEmail(validateUser.email);
        let userDetails: User = {
                id:'',
                first_name:'',
                last_name:'',
                email:'',
                password:'',
                message:''
        };
        if (user) {
            if (await bcrypt.compare(validateUser.password, user.password)) {
               userDetails = user;
               userDetails.message = 'Success';
               return user;
            }
        }
        userDetails.message ='Invalid Email or Password'
        return userDetails;
    }

    async register(createUserInput: CreateUserInput){
        return await this.userService.createUser(createUserInput);
    }
}
