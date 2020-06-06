import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import Game from 'src/app/global/models/Game';
import Editor from 'src/app/global/models/Editor';
import Category from 'src/app/global/models/Category';

import { faQuestion, faTimes } from "@fortawesome/free-solid-svg-icons";
import { PopularGameService } from 'src/app/global/services/popular-game.service';

@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.scss']
})
export class PopularGamesComponent implements OnInit, OnDestroy {

    private games: Game[];

    private isLoading = true;

    private topinc: number = 0;
    private botinc: number = 0;

    private isAbout = false;

    faQuestion = faQuestion;
    faTimes = faTimes;
    
    constructor(private titleService: Title, private popularGamesAPI: PopularGameService, private router: Router) {
        this.titleService.setTitle("Le Top Jeux - Débazar");
    }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('hourglass-bg');

        this.popularGamesAPI.get3populars()
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

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('hourglass-bg');
    }

    mouseWheelUpFunc() {
        if (window.scrollY == 0) {
            this.topinc++;
            if (this.topinc >= 5) {
                this.router.navigate(['/vendre-mes-jeux']);
            }
        } else {
            this.topinc = 0;
        }
    }

    mouseWheelDownFunc() {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {
            this.botinc++;
            if (this.botinc >= 7) {
                this.router.navigate(['/meilleurs-jeux-societe']);
            }
        } else {
            this.botinc = 0;
        }
    }

    toggleAbout() {
        this.isAbout = !this.isAbout;
    }

}
