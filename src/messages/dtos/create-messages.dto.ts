import { IsNumber, IsString } from "class-validator"

export class MessageDto{
@IsString()    
nom:string

@IsString()
prenom:string

@IsNumber()
age:number
}