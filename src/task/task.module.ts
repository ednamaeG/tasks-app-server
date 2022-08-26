import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { Task } from './models/task.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([Task])],
    providers:[TaskService, TaskResolver],
    controllers:[TaskController],
    exports:[TaskService , TaskResolver]
})
export class TaskModule {}
