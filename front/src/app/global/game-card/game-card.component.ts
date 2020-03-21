import { Component, OnInit, Input } from '@angular/core';

import Game from 'src/app/global/models/Game'
import Editor from 'src/app/global/models/Editor';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

    @Input() game: Game;
    private flipped: boolean;

    constructor() { }

    ngOnInit() {
        this.flipped = true;
    }

    flipCard() {
        this.flipped = !this.flipped;
    }

}
