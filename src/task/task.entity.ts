import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    author: string;

    @Column()
    description: string;
}