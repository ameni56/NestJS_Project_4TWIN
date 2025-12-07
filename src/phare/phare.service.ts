import { Injectable } from '@nestjs/common';
import { PhareRepository } from './phare.repository';

@Injectable()
export class PhareService {
     constructor(private readonly phareRepo:PhareRepository){}

    turnOn(){
this.phareRepo.turnOn()
    }
}
