import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { MessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';
import { ObjectId } from 'typeorm';

@Injectable()
@Controller('messages')
export class MessagesController {
    constructor(private readonly MessagesService:MessagesService){}

    
 @Get()
 listMessages(){
     // return{ "bonjour":"kk"}
    return this.MessagesService.findAll() }

 @Get("/:id")
 GetMessage(@Param("id") id:ObjectId){
     // console.log(id)
    // return {id}
     return this.MessagesService.findOneById(id) }

@Post()
CreateMessage(@Body() body){
    // console.log(body)
    // return {body}
     return this.MessagesService.create(body.content,body.status)
}


}
