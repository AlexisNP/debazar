import { Component, OnInit, Input } from '@angular/core';

import { faStar as fasStar, faAward } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import Game from '../../models/Game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

    @Input() private game: Game;
    @Input() private isShowcase: boolean;

    fasStar = fasStar;
    farStar = farStar;
    faAward = faAward;

    constructor() {

    }

    ngOnInit() {
        
    }

    ratingStars(stars: number) {
        let output = [];
        for (let index = 0; index < 5; index++) {
            if (stars > 0) {
                output.push(1);
            } else {
                output.push(0);
            }
            stars--;
        }
        return output;
    }

}
