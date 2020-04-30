import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-games',
  templateUrl: './sell-games.component.html',
  styleUrls: ['./sell-games.component.scss']
})
export class SellGamesComponent implements OnInit, OnDestroy {

    constructor(private titleService: Title, private router: Router) {
        this.titleService.setTitle("Vendre son jeu - Débazar");
    }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('hourglass-bg');
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('hourglass-bg');
    }

    mouseWheelUpFunc() {
        this.router.navigate(['/annonces-jeux-recentes']);
    }

    mouseWheelDownFunc() {
        this.router.navigate(['/top-jeux-societe']);
    }

}
