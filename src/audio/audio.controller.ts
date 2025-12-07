import { Controller, Get } from '@nestjs/common';
import { AudioService } from './audio.service';

@Controller('audio')
export class AudioController {
     constructor(private readonly audioService:AudioService){}

@Get("/play")
playMusic(){
    this.audioService.playMusic()
    return "Musique en lecture"
}
}
