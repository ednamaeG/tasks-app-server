import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { GetTaskArgs } from './dto/args/get-task.args';
import { GetUserTasksArgs } from './dto/args/get-user-task.args';
import { CreateTaskInput } from './dto/input/create-task.input';
import { DeleteTaskInput } from './dto/input/delete-task.input';
import { Task } from './models/task.model';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task)
    private repository: Repository<Task>,) { }
    async getTask(getTaskArgs: GetTaskArgs): Promise<Task> {
        return await this.repository.findOne({ where: getTaskArgs });
    }


    async getUserTasks(getUserTaskArgs: GetUserTasksArgs): Promise<Task[]> {
        return await this.repository.find({ where: getUserTaskArgs ,order: {date_created: 'DESC'}});
    }


    async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
        const task = {
            note: createTaskInput.note,
            user_id: createTaskInput.user_id
             
        }


        return await this.repository.save(task);


    }

    async deleteTask(deleteTaskInput: DeleteTaskInput):  Promise<String> {
        let message = '';
        const deleted =  await this.repository.delete(deleteTaskInput.id);

        if(deleted.affected == 1){
            message = 'Success';
        }else{
            message = 'Unable To Delete Task';
        }

        return message;
    }
}
