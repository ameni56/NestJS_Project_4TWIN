import { Body, Controller, Get, Param, Post, Query,Headers,Patch, Injectable, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { ObjectId } from 'typeorm';
import { updateUserDto } from './dtos/update-user.dto';
import { createUserDto } from './dtos/create-user.dto';


@Injectable()
@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
@Post()
create(@Body() data:createUserDto){
    return this.userService.createUser(data.email,data.password);
}
@Get()
findAll() {
 return this.userService.findAll();
 }
   @Get('/find/:id')
findOneById(@Param('id') id:ObjectId) {
 return this.userService.findOneById(id);
 }
  @Get('/email/:email')
findOneByEmail(@Param('email') email:string) {
 return this.userService.findOneByEmail(email);
 }

 @Get('/active')
findByActive() {
 return this.userService.findActive();
 }

  @Patch('update/:id')
   updateUser(
    @Param('id') id: ObjectId,
    @Body() attrs: updateUserDto,
  ) {
   
    return this.userService.update(id, attrs);
  }

@Delete('/delete/:id')
  remove(@Param('id') id: ObjectId) {
   
    this.userService.remove(id);
    return { message: 'Utilisateur supprimé avec succès' };
  }
@Post('/activate')
  activateAccount(@Body() data){
      return this.userService.activateAccount(data.email, data.password);

  }

// }
//     users = [
// { id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
// { id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
// { id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
// { id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
// ]


// @Get()
// findAll(@Query('username') username: string) {
// if (username) {
// return this.users.filter(user => user.username === username);
// }
// return this.users;
// }

// @Get(':id')
// findOne(@Param('id') id: number){
// return this.users.find(user => user.id === Number(id));
// }

// @Post("/add")
// create(@Body() data,@Headers('authorization') authHeader:string){
//     console.log('Authorization',authHeader)
//     const newUser={id:Date.now(),...data}
//     this.users.push(newUser)
//     return this.users

// }

// @Patch('/:id')
// update(@Param('id') id:number,@Body()data){
//     const user=this.users.find(user=>user.id===Number(id))
//     if(user){
//         user.username=data.username
//         user.email=data.email
//         user.status=data.status
//         return user
//     }
//     return null
// }

}
