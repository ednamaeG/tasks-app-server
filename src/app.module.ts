import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { TypeOrmConfigService } from './database/typeorm-config.service';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,

    playground: true,
    debug: true,

  }),
  ConfigModule.forRoot({
    isGlobal: true,
    load: [
      databaseConfig
    ],
    envFilePath: ['.env'],

  }),
  TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService,
  }),
    AuthModule,
    TaskModule,
    UserModule
  ],
  controllers: [UserController],
  providers: [AppService],

})
export class AppModule { }
