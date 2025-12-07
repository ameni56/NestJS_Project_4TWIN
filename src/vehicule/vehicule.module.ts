import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeRepository } from './vehicule.repository';
import { PhareModule } from 'src/phare/phare.module';
import { AudioModule } from 'src/audio/audio.module';
import { VehiculeController } from './vehicule.controller';

@Module({
  imports: [PhareModule,AudioModule],
  providers:[VehiculeService,VehiculeRepository],
  controllers: [VehiculeController]
})
export class VehiculeModule {}
