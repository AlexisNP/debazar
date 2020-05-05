import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Game from '../../models/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

    private games: Game[];

    constructor(private titleService: Title) {
        this.titleService.setTitle("Jeux - Débazar");
    }

    ngOnInit() {

    }

}
