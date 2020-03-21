import { Component, OnInit, Input } from '@angular/core';

import Game from 'src/app/global/models/Game'

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

    @Input() game: Game;
    flipped: boolean;

    constructor() { }

    ngOnInit() {
        this.flipped = false;
    }

    flipCard() {
        this.flipped = !this.flipped;
    }

}
