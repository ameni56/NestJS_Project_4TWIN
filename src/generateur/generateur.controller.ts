import { Controller, Get } from '@nestjs/common';
import { GenerateurService } from './generateur.service';

@Controller('generateur')
export class GenerateurController {
     constructor(private readonly generateurService:GenerateurService){}

@Get("/generate")
generatePower(){
    this.generateurService.generatePower()
    return "Generateur en fonctionnement"

}
}
