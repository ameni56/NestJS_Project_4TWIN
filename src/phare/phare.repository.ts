import { Injectable } from "@nestjs/common";
import { GenerateurRepository } from "src/generateur/generateur.repository";


@Injectable()
export class PhareRepository{
    constructor(private readonly generatorRepository:GenerateurRepository){}


turnOn(){
this.generatorRepository.generatePower()
console.log('Phare allumé')
    }}