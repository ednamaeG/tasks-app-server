import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserInput } from 'src/user/dtos/inputs/create-user.input';
import { ValidateUserInput } from 'src/user/dtos/inputs/validate-user.input';
import { AuthService } from './auth.service';

@Controller({
    path:'auth',
    version:'1'
})
export class AuthController {
    constructor(private service: AuthService ){}

    @Post('/login')
    login(@Body() body: ValidateUserInput){
        return this.service.validateUser(body);
    }

    @Post('/register')
    register(@Body() body: CreateUserInput){
        return this.service.register(body);
    }
}
