import { Component, OnInit, Input } from '@angular/core';

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import Game from '../../models/Game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

    @Input() private game: Game;

    fasStar = fasStar;
    farStar = farStar;

    constructor() {

    }

    ngOnInit() {
        
    }

}
