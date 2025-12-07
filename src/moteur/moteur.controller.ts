import { Controller, Get } from '@nestjs/common';
import { MoteurService } from './moteur.service';

@Controller('moteur')
export class MoteurController {
    constructor(private readonly moteurService:MoteurService){}

@Get('/start')
startMoteur(){
    this.moteurService.startMoteur()
    return "Moteur Démarré"
}

@Get('/status')
statusMoteur(){
   return this.moteurService.getStatusMoteur()
    
}

}
