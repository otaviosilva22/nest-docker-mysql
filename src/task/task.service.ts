import {Injectable} from '@nestjs/common';
import {Task} from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService{

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ){}

    createTask(taskDto: TaskDto): Promise<Task>{

        const task = this.taskRepository.create(taskDto);

        return this.taskRepository.save(task);
    }

    readOneTask(id: number): Promise<Task>{

        return this.taskRepository.findOne({
            where: {
                id
            }
        });
    }

    readAllTask(): Promise<[Task[], number]>{
        return this.taskRepository.findAndCount();
    }

    updateTask(id: number, task: Partial<TaskDto>): Promise<UpdateResult>{
        return this.taskRepository.update(id, task);
    }

    deleteTask(id:number): Promise<DeleteResult>{
        return this.taskRepository.delete(id);
    }
}