import { Component, OnInit } from '@angular/core';
import { GameCardComponent } from "src/app/global/game-card/game-card.component";
import Game from 'src/app/global/models/Game'
import Editor from 'src/app/global/models/Editor';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    private gameList: Game[];

    constructor() { }

    ngOnInit() {
        this.gameList = [
            new Game(1, "Game 1", null, "Description", 4, "Éternité", new Date(), 4, 9, new Editor("Bob")),
            new Game(2, "Game 2", null, "Description", 8, "Éternité", new Date(), 4, 19, new Editor("Bob")),
            new Game(3, "Game 3", null, "Description", 2, "Éternité", new Date(), 4, 69, new Editor("Bob")),
        ]
    }

}
