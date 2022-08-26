import { Field, Int, ObjectType , Extensions} from '@nestjs/graphql';
 import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User{
    @PrimaryGeneratedColumn('uuid')
    @Field()
    id: string;

    @Column()
    @Field()
    first_name: string;

    @Column()
    @Field()
    last_name: string;

    @Column()
    @Field()
    email: string;


    @Column()
    @Field()
    password: string;

    @CreateDateColumn()
    @Field()
    date_created?:Date;

    @Field({nullable: true})
    message: string;
}