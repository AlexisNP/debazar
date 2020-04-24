import { Component, OnInit, Input } from '@angular/core';

import Game from 'src/app/global/models/Game';

@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.scss']
})
export class PopularGamesComponent implements OnInit {

    @Input() private games: Game[];

    constructor() {

    }

    ngOnInit() {

    }

}
