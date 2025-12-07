import { Entity, ObjectIdColumn, ObjectId, Column, BeforeInsert } from 'typeorm';
import { IsString, IsEmail, IsBoolean } from "class-validator";
import { Logger } from '@nestjs/common';
@Entity()
export class User {
   
    
@ObjectIdColumn()
id: ObjectId;

@Column()
@IsEmail()
email: string;

@Column()
@IsString()
password: string;

@Column({ default: false })
@IsBoolean()
active: boolean;
}