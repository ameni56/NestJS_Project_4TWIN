import { Injectable } from '@nestjs/common';
import { VehiculeRepository } from './vehicule.repository';

@Injectable()
export class VehiculeService {
     constructor(private readonly vehiculeRepo:VehiculeRepository){}


operateVehicule(){
    this.vehiculeRepo.operate()
}
}
