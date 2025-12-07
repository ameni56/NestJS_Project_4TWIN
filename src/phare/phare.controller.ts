import { Controller, Get } from '@nestjs/common';
import { PhareService } from './phare.service';

@Controller('phare')
export class PhareController {
        constructor(private readonly phareService:PhareService){}

@Get("/turnOn")
turnOnPhare(){
    this.phareService.turnOn();
    return "phare allumé"
}
}
