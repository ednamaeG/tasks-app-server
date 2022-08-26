 import { Resolver,Query, Args, Mutation } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm';
import { GetTaskArgs } from './dto/args/get-task.args';
import { GetUserTasksArgs } from './dto/args/get-user-task.args';
import { CreateTaskInput } from './dto/input/create-task.input';
import { DeleteTaskInput } from './dto/input/delete-task.input';
import { Task } from './models/task.model';
import { TaskService } from './task.service';

@Resolver(Task)
export class TaskResolver {

    constructor(private service : TaskService){}
    @Query(() => Task , {nullable: true })
    async getTask(@Args() getTaskArgs: GetTaskArgs): Promise<Task>{
        return await this.service.getTask(getTaskArgs);
    }

    @Query(() => [Task] , {name: 'userTasks'})
    async getTasks(@Args() getUserTasksArgs: GetUserTasksArgs): Promise<Task[]>{
        return this.service.getUserTasks(getUserTasksArgs);
    }

    @Mutation(() => Task , {name: 'createTask'})
    async  createTask(@Args() createTaskInput: CreateTaskInput): Promise<Task>{
        return await this.service.createTask(createTaskInput);
    }

    @Mutation(() => String , {name: 'deleteTask' , nullable: true})
     async deleteTask(@Args() deleteTaskInput: DeleteTaskInput): Promise<String>{
        return  await  this.service.deleteTask(deleteTaskInput);
    }
}
