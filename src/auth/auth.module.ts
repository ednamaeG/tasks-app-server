import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [AuthService, AuthResolver],
  controllers:[AuthController],
  exports: [AuthService],
  imports:[UserModule]
})
export class AuthModule {}
