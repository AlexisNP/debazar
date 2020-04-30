import { Component, OnInit, Input } from '@angular/core';

import Game from 'src/app/global/models/Game';
import Editor from 'src/app/global/models/Editor';
import Category from 'src/app/global/models/Category';

@Component({
  selector: 'app-game-spotlight',
  templateUrl: './game-spotlight.component.html',
  styleUrls: ['./game-spotlight.component.scss']
})
export class GameSpotlightComponent implements OnInit {

    private games: Game[];

    constructor() {
        this.games = [
            new Game(942, "Monopoly", "https://www.kroger.com/product/images/xlarge/front/0063050951263", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 4, "Éternité", new Date(), 3, 4, new Editor(1, "Bob"), new Category(1, "Jeu de plateau")),
        ];
    }

    ngOnInit() {

    }

}
