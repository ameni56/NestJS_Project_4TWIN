import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';
import { MoteurModule } from './moteur/moteur.module';
import { GenerateurModule } from './generateur/generateur.module';
import { PhareModule } from './phare/phare.module';
import { AudioModule } from './audio/audio.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './messages/message.entity';
import { User } from './users/user.entity';
import { AdminUserController } from './users/admin-user-controller.controller';
import { ClientUserController } from './users/clinet-user-controller.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Global()
@Module({
    imports: [
TypeOrmModule.forRoot({
type: 'mongodb',               
host: 'localhost', 
port: 27017, 
database: '4TWIN1',
entities: [Message,User], 
synchronize: true, 
}),
    
    MessagesModule, UsersModule, MoteurModule, GenerateurModule, PhareModule, AudioModule, VehiculeModule,
  ServeStaticModule.forRoot({
rootPath: join(__dirname, '..', 'public'),
}),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
