import { IsString, IsNumber, Min, Max, IsNotEmpty } from 'class-validator';

export class TaskDto {
    @IsString()
    @IsNotEmpty()
    readonly author: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;
}
