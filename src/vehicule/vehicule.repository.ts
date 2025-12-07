import { Injectable } from "@nestjs/common";
import { AudioRepository } from "src/audio/audio.repository";
import { PhareRepository } from "src/phare/phare.repository";

@Injectable()
export class VehiculeRepository{
    constructor(private readonly phareRepository:PhareRepository,
       private readonly audioRepository:AudioRepository,
    ){}

    operate(){
        this.phareRepository.turnOn()
        this.audioRepository.playMusic()
        console.log("Vehicule en fonctionnement")
    }
}