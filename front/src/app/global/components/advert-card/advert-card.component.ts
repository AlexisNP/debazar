import { Component, OnInit, Input } from '@angular/core';

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';


import Advert from 'src/app/global/models/Advert';
import Game from '../../models/Game';
import User from '../../models/User';

@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.scss']
})
export class AdvertCardComponent implements OnInit {

    @Input() advert: Advert;
    game: Game;
    user: User;
    arrayRating: Array<number>;

    fasStar = fasStar;
    farStar = farStar;

    constructor() {
    }

    ngOnInit() {
        this.game = this.advert.game;
        this.user = this.advert.user;
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
