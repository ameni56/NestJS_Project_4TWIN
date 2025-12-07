import { Injectable } from "@nestjs/common";
import { GenerateurRepository } from "src/generateur/generateur.repository";

@Injectable()
export class AudioRepository{
constructor(private readonly generatorRepository:GenerateurRepository){}

playMusic(){
    this.generatorRepository.generatePower()
    console.log("Musique en lecture")
}
}