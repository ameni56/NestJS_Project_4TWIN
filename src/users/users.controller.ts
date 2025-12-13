import { Body, Controller, Get, Param, Post, Query,Headers,Patch, Injectable, Delete, ParseIntPipe, BadRequestException } from '@nestjs/common';
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
    return this.userService.createUser(data.email,data.password,data.role);
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

 @Get('role/:role')
  async getUsersByRole(@Param('role') role: string) {
    return this.userService.findUsersByRole(role);
  }
  @Get('/inactive')
  async getInactiveUsers() {
    return this.userService.findInactiveUsers();
  }
  @Get('domain/:domain')//tester avec http://localhost:3000/users/domain/gmail.com
  async getUsersByDomain(@Param('domain') domain: string) {
    return this.userService.findUsersByDomain(domain);
  }

 @Get('/recent')
  async getRecentUsers() {
    return this.userService.findRecentUsers();
  }
 @Get('/count-by-role')
  async getCountByRole() {
    return this.userService.countUsersByRole();
  }

 @Get('/date-range')//tester avec localhost:3000/users/date-range?start=2025-12-07&end=2025-12-10
  async getUsersByDateRange(
    @Query('start') start: string,
    @Query('end') end: string,
  ) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return this.userService.findUsersByDateRange(startDate, endDate);
  }
  @Get('/recent-limit')//localhost:3000/users/recent-limit?limit=2
  async getRecentUsersLimit(@Query('limit', ParseIntPipe) limit: number){
    return this.userService.findRecentUsersLimit(limit);
  }

 @Get('/average-time')
  async getAverageTimeBetweenCreateAndUpdate() {
    return this.userService.calculateAverageTimeBetweenCreateAndUpdate();
  }
@Get('/paginated')//localhost:3000/users/paginated?page=2&limit=3
async getPaginatedUsers(
  @Query('page', ParseIntPipe) page: number,
  @Query('limit', ParseIntPipe) limit: number,
) {
  return this.userService.findPaginatedUsers(page, limit);
}
@Get('/sorted')
  async getSortedUsers() {
    return this.userService.findSortedUsers();
  }
@Get('/multi-sorted')
  async getUsersWithMultipleSorting() {
    return this.userService.findUsersWithMultipleSorting();
  }
//Partie 4 
 @Post('/doublon')
  async createDoublon(@Body() data: createUserDto) {
    try {
      return await this.userService.createUserDoublon(data);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
@Patch('/updateUserNonTrouve/:id')
   updateUserNonTrouve(
    @Param('id') id: ObjectId,
    @Body() attrs: updateUserDto,
  ) {
   
    return this.userService.updateUser(id, attrs);
  }
@Patch('/deactivate-old-accounts')
   deactivateOldAccounts() {
    this.userService.deactivateOldAccounts();
  }
 @Patch('/update-role-by-domain')
  updateUsersRoleByDomain(@Body() data ) {
    this.userService.updateUsersRoleByDomain(data.domain, data.newRole);
  }


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
