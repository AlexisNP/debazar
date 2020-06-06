import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import Game from '../../models/Game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

    private games: Game[];

    private isLoading = true;

    constructor(private titleService: Title, private gameService: GameService) {
        this.titleService.setTitle("Jeux - Débazar");
    }

    ngOnInit() {
        this.gameService.getAllGames()
        .then(values => {
            this.games = Object.values(values);
        })
        .then(() => {
            this.isLoading = false;
        })
        .catch(err => {
            console.log(err)
        })
    }

}
