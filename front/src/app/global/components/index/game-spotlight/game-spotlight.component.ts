import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import Game from 'src/app/global/models/Game';
import Editor from 'src/app/global/models/Editor';
import Category from 'src/app/global/models/Category';

import { faQuestion, faTimes } from "@fortawesome/free-solid-svg-icons";
import { BestGameService } from 'src/app/global/services/best-game.service';

@Component({
  selector: 'app-game-spotlight',
  templateUrl: './game-spotlight.component.html',
  styleUrls: ['./game-spotlight.component.scss']
})
export class GameSpotlightComponent implements OnInit, OnDestroy {

    private games = [];

    private isLoading = true;

    private topinc: number = 0;

    private isAbout = false;

    faQuestion = faQuestion;
    faTimes = faTimes;

    constructor(private titleService: Title, private bestGameAPI: BestGameService, private router: Router) {
        this.titleService.setTitle("Notre sélection - Débazar");
    }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('hourglass-bg');

        this.bestGameAPI.getbest()
        .then(values => {
            this.games = []
            this.games.push(Object.values(values)[1])
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
            if (this.topinc >= 7) {
                this.router.navigate(['/top-jeux-societe']);
            }
        } else {
            this.topinc = 0;
        }
    }

    toggleAbout() {
        this.isAbout = !this.isAbout;
    }

}
