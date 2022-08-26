import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { GetTaskArgs } from './dto/args/get-task.args';
import { GetUserTasksArgs } from './dto/args/get-user-task.args';
import { CreateTaskInput } from './dto/input/create-task.input';
import { TaskService } from './task.service';

@Controller({
    path:'task',
    version: '1'
})
export class TaskController {

    constructor(private service : TaskService){}

    @Post('/create')
    createTask(@Body() body: CreateTaskInput) {
        return  this.service.createTask(body);
    }

    @Get('')
    getTask(@Query() args: GetTaskArgs) {
        return this.service.getTask(args);
    }

    @Delete()
    deleteTask(@Query() args: GetTaskArgs){
        return  this.service.deleteTask(args);
    }

    @Get('/user/list')
    getTaskList(@Query() args: GetUserTasksArgs)  {
        return this.service.getUserTasks(args);
    }
}
