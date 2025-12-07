import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';

import { User } from 'src/users/user.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UsersService {

constructor(@InjectRepository(User) private userRepository:MongoRepository<User>){}



async createUser(email:string,password:string):Promise<User>{
    try{

    
    const user= this.userRepository.create({email,password,active:true});
    await this.userRepository.save(user);
    return user;
    }
    catch(error){
          console.error(error);
        throw new InternalServerErrorException("Erreur");
    }


}

async findAll():Promise<User[]>{
    try{
    const users=await this.userRepository.find();
    if (users.length===0){
        throw new NotFoundException("Aucun utilisateur trouvé")
    }
    return users
    }
    catch(error){
  console.error(error);
        throw new InternalServerErrorException("Erreur");
    }
}
async findOneById(id:ObjectId):Promise<User>{

    try{
        const user=await this.userRepository.findOneBy(id);
        if(!user){
            
            throw new NotFoundException("Cet utilisateur n'existe pas")

        }
        return user;
    }
    catch(error){

     console.error(error);
        throw new InternalServerErrorException("Erreur");
    }
}



async findOneByEmail(email:string):Promise<User>{

    try{
        const user=await this.userRepository.findOneBy({email});
        if(!user){
            
            throw new NotFoundException("Cet utilisateur n'existe pas")

        }
        return user;
    }
    catch(error){

     console.error(error);
        throw new InternalServerErrorException("Erreur");
    }
}

async findActive():Promise<User[]>{
    try{
    const users=await this.userRepository.find({where:{active:true}});
  if (users.length === 0) {
        throw new NotFoundException("Aucun utilisateur actif trouvé");
      }

      return users; 
    }
    catch(error){

     console.error(error);
        throw new InternalServerErrorException("Erreur");
    }
}

async update(id: ObjectId, attrs: Partial<User>): Promise<User> {
try {
const user = await this.findOneById(id);
Object.assign(user, attrs);
await this.userRepository.save(user);
return user;
} catch (error) {
console.error("Erreur lors de l’opération de mise à jour:", error);
throw new InternalServerErrorException('Échec de la mise à jour de l’utilisateur');
}
}

async remove(id: ObjectId): Promise<void> {//le mot-clé void signifie que la fonction ne retourne aucune valeur.
try {
const user = await this.findOneById(id);
if (!user) {
throw new NotFoundException(`Utilisateur avec l’ID ${id} non trouvé`);
}
await this.userRepository.delete(id);
} catch (error) {
console.error("Erreur lors de l’opération de suppression:", error);
throw new InternalServerErrorException('Échec de la suppression de l’utilisateur');
}
}

async activateAccount(email: string, password: string): Promise<User> {
try {
const user = await this.findOneByEmail(email);
if (user && user.password === password) {
user.active = true;
await this.userRepository.save(user);
return user;
}
throw new NotFoundException('Identifiants invalides');
} catch (error) {
console.error("Erreur lors de l’activation du compte:", error);
throw new InternalServerErrorException('Échec de l’activation du compte');
}
}

}


