import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-games',
  templateUrl: './sell-games.component.html',
  styleUrls: ['./sell-games.component.scss']
})
export class SellGamesComponent implements OnInit, OnDestroy {

    private topinc: number = 0;
    private botinc: number = 0;

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
        if (window.scrollY == 0) {
            this.topinc++;
            if (this.topinc >= 7) {
                this.router.navigate(['/annonces-jeux-recentes']);
            }
        } else {
            this.topinc = 0;
        }
    }

    mouseWheelDownFunc() {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            this.botinc++;
            if (this.botinc >= 7) {
                this.router.navigate(['/top-jeux-societe']);
            }
        } else {
            this.botinc = 0;
        }
    }

}
