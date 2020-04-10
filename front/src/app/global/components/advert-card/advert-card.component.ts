import { Component, OnInit, Input } from '@angular/core';

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

    constructor() {
    }

    ngOnInit() {
        this.game = this.advert.game;
        this.user = this.advert.user;
    }

}
