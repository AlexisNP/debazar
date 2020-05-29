import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import Game from 'src/app/global/models/Game';
import Editor from 'src/app/global/models/Editor';
import Category from 'src/app/global/models/Category';

import { faQuestion, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.scss']
})
export class PopularGamesComponent implements OnInit, OnDestroy {

    private games: Game[];

    private topinc: number = 0;
    private botinc: number = 0;

    private isAbout = false;

    faQuestion = faQuestion;
    faTimes = faTimes;
    
    constructor(private titleService: Title, private router: Router) {
        this.titleService.setTitle("Top Jeux - Débazar");
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
