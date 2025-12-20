import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Message } from "./message.entity";

import { ObjectId } from "mongodb";
import { MongoRepository} from "typeorm";

@Injectable()
export class MessagesService {

constructor(@InjectRepository(Message) private messageRepository: MongoRepository<Message>)
{}

async create(content:string,status:string):Promise<Message>{
    try{  
    
const message=this.messageRepository.create({content,status,date:new Date()});
await this.messageRepository.save(message)
return message
  }
  catch(error){
    console.error("Une erreur est survenue")
    throw new InternalServerErrorException("Le message n'était pas créer")
  }


}
findAll(){
    const list=this.messageRepository.find()
    return list

}

async findOneById(id: ObjectId): Promise<Message> {
    try {
      const message = await this.messageRepository.findOneBy(id);
      if (!message) {
        throw new NotFoundException(`Message with id ${id} not found`);
      }
      return message;
    } catch (error) {
      console.error('Error during findOneById operation:', error);
      throw new InternalServerErrorException('Failed to retrieve the message');
    }
  }
  






// messagesRepository: MessagesRepository
// constructor() {
// this.messagesRepository = new MessagesRepository()
// }
// findOne(id: string) {
// return this.messagesRepository.findOne(id)
// }
// findAll() {
// return this.messagesRepository.findAll()
// }
// create(content: string) {
// return this.messagesRepository.create(content)
// }
}