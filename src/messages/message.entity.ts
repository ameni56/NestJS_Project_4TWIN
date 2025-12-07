import { IsString } from "class-validator";
import { ObjectId } from "mongodb";
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class Message{
    @AfterInsert()
logInsert() {
console.log("Message inserted with id: " + this.id); }
@AfterUpdate()
logUpdate() {
console.log("Message updated with id: " + this.id); }
@AfterRemove()
logRemove() {
console.log("Message removed with id: " + this.id); }

@ObjectIdColumn()
id:ObjectId


@Column()
content:string

@Column()
status:string

@Column({default:()=>'CURRENT_TIMESTAMP'})
date:Date
}