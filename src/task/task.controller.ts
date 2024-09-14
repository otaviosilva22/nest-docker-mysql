import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './dto/task.dto';
import { Task } from './task.entity';
import { DeleteResult, UpdateResult } from 'typeorm';


@Controller('task')
export class TaskController{

    constructor(private taskService: TaskService){}
    
    @Post()
    async create(@Body() taskDto: TaskDto): Promise<Task> {
        return this.taskService.createTask(taskDto);
    }

    @Get(':id')
    readOne(@Param('id') id: number): Promise<Task> {
        return this.taskService.readOneTask(id);
    }

    @Get()
    readAll(): Promise<[Task[], number]>{
        return this.taskService.readAllTask();
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() task: Partial<TaskDto>): Promise<UpdateResult>{
        return this.taskService.updateTask(id, task)
    }

    @Delete(':id')
    delete(@Param('id') id:number): Promise<DeleteResult>{
        return this.taskService.deleteTask(id);
    }
}