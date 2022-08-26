import { Field, Int, ObjectType , } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Task{
    @PrimaryGeneratedColumn('uuid')
    @Field()
    id: string;

    @Column()
    @Field()
    note: string;

    @Column()
    @Field()
    user_id: string;

    @CreateDateColumn()
    @Field()
    date_created?:Date;
}