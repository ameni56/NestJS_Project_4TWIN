import { Injectable } from "@nestjs/common";
import { MoteurRepository } from "src/moteur/moteur.repository";

@Injectable()
export class GenerateurRepository{
constructor(private readonly moteurRepository:MoteurRepository){}


generatePower(){
     this.moteurRepository.start()
    console.log("Generateur en fonctionnement")
}
}