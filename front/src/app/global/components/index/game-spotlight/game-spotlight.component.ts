import { Component, OnInit, Input } from '@angular/core';
import Game from 'src/app/global/models/Game';

@Component({
  selector: 'app-game-spotlight',
  templateUrl: './game-spotlight.component.html',
  styleUrls: ['./game-spotlight.component.scss']
})
export class GameSpotlightComponent implements OnInit {

    @Input() private game: Game;

    constructor() {
        
    }

    ngOnInit() {

    }

}
