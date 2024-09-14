import { TaskController } from "./task.controller"
import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from "./task.service";
import { TaskDto } from "./dto/task.dto";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";
import { Task } from "./task.entity";

describe('task controller tests', ()=>{
    
    let taskController: TaskController;
    let taskService: TaskService;

    const mockTaskService = {
        createTask: jest.fn(),
        readOneTask: jest.fn(),
        readAllTask: jest.fn(),
        updateTask: jest.fn(),
        deleteTask: jest.fn()
    }

    beforeEach(async()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TaskController],
            providers: [
                {
                    provide: TaskService,
                    useValue: mockTaskService
                }
            ]
        }).compile()

        taskController = module.get<TaskController>(TaskController);
        taskService = module.get<TaskService>(TaskService);

    })

    const task: Task = {
        id: 1,
        author: "Author",
        description: "Description"
    }

    it('create endpoint', ()=>{
        const taskRequest: TaskDto = {
            author: 'Author',
            description: 'Description'
        }

        mockTaskService.createTask.mockResolvedValue(task);

        const result = taskController.create(taskRequest);

        expect(result).resolves.toEqual(task);  
    });

    it('readOne endpoint', ()=> {
        mockTaskService.readOneTask.mockResolvedValue(task);

        const result = taskController.readOne(1);

        expect(result).resolves.toEqual(task);
    })

    it('readAll endpoint', ()=>{
        
        const allTasks: Array<Task> = [
            {...task},
            {
                id: 2,
                author: 'Author 2',
                description: 'Description 2'
            }
        ]
        
        mockTaskService.readAllTask.mockResolvedValue(allTasks);

        const result = taskController.readAll();

        expect(result).resolves.toEqual(allTasks);
        
    })

    it('update endpoint', ()=>{
        const resultUpdate: UpdateResult = {
            raw: undefined,
            generatedMaps: []
        }

        mockTaskService.updateTask.mockResolvedValue(resultUpdate);

        const result = taskController.update(1, {author: 'Updated Author'});

        expect(result).resolves.toEqual(resultUpdate);
    })

    it('Delete endpoint', ()=>{
        const deleteResult: DeleteResult = {
            raw: undefined
        }
        mockTaskService.deleteTask.mockResolvedValue(deleteResult);

        const result = taskController.delete(1);

        expect(result).resolves.toEqual(deleteResult);
    })

})