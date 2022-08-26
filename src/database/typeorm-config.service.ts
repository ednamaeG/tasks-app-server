import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from '@nestjs/config';
import { User } from "src/user/models/user.model";
import { Task } from "src/task/models/task.model";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configSvc: ConfigService) { }
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configSvc.get('database.type'),
      host: this.configSvc.get('database.host'),
      port: this.configSvc.get('database.port'),
      username: this.configSvc.get('database.username'),
      password: this.configSvc.get('database.password'),
      database: this.configSvc.get('database.name'),
      entities: [__dirname + '/../**/*.model{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/database/migrations',
      }
    } as TypeOrmModuleOptions;
  }
}