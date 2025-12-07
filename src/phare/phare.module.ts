import { Module } from '@nestjs/common';
import { PhareService } from './phare.service';
import { PhareRepository } from './phare.repository';
import { GenerateurModule } from 'src/generateur/generateur.module';
import { PhareController } from './phare.controller';

@Module({
  imports:[GenerateurModule],
  providers: [PhareService,PhareRepository],
  exports:[PhareRepository],
  controllers: [PhareController]
})
export class PhareModule {}
