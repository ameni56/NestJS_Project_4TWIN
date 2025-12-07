import { Injectable } from "@nestjs/common";

@Injectable()
export class MoteurRepository{

    private status:string="off"

    start(){
        this.status="on"
        console.log("Moteur démarré")
    }

    getStatus(){
      return this.status;
    }
}