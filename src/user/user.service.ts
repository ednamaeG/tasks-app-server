import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dtos/inputs/create-user.input';
import { User } from './models/user.model';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private repository: Repository<User>,) {

    }

    // add email checker
    async createUser(createUserInput: CreateUserInput): Promise<User> {
        const checkEmailExists = await this.repository.findOne({ where: { email: createUserInput.email } });
        let user : User = {
            first_name:'',
            last_name:'',
            id:'',
            email:'',
            message:'',
            password:'',
             
        };
        if (checkEmailExists) {
            user.message = 'Email Already Exists';
            return user;
        }

        const saltOrRounds = 10;
        const password = createUserInput.password;
        createUserInput.password = await bcrypt.hash(password, saltOrRounds);
        user =  await this.repository.save(createUserInput);
        user.message ='Success';
        return user;
    }

    async findOneByEmail(email:string){
        return await this.repository.findOne({where:{email: email}});
    }
}
