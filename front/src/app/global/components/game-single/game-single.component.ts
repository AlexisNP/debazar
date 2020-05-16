import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import Game from '../../models/Game';
import Category from '../../models/Category';
import Editor from '../../models/Editor';

@Component({
  selector: 'app-game-single',
  templateUrl: './game-single.component.html',
  styleUrls: ['./game-single.component.scss']
})
export class GameSingleComponent implements OnInit {

    private game: Game;

    fasStar = fasStar;
    farStar = farStar;

    constructor(private titleService: Title) {}

    ngOnInit() {
        this.game = new Game(94, "Monopoly", "https://www.kroger.com/product/images/xlarge/front/0063050951263", "Un jeu qui ravira petit et grand", 4, "2 jours", new Date(), 5, 15, new Editor(1, "Jeux&Cie"), new Category(4, "Jeux de plateau"), null);
        this.titleService.setTitle(this.game.name + " - Fiche Débazar");
    }

}
