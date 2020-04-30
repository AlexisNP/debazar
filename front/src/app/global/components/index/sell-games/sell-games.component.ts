import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sell-games',
  templateUrl: './sell-games.component.html',
  styleUrls: ['./sell-games.component.scss']
})
export class SellGamesComponent implements OnInit {

    constructor(private titleService: Title) {
        this.titleService.setTitle("Vendre son jeu - Débazar");
    }

    ngOnInit() {

    }

}
