import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import Advert from 'src/app/global/models/Advert';
import Game from 'src/app/global/models/Game';
import User from 'src/app/global/models/User';
import Editor from 'src/app/global/models/Editor';
import Category from 'src/app/global/models/Category';

import { faQuestion, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-recent-adverts',
  templateUrl: './recent-adverts.component.html',
  styleUrls: ['./recent-adverts.component.scss']
})
export class RecentAdvertsComponent implements OnInit, OnDestroy {

    private adverts: Advert[];

    private topinc: number = 0;
    private botinc: number = 0;

    private isAbout = false;

    faQuestion = faQuestion;
    faTimes = faTimes;
    
    constructor(private titleService: Title, private router: Router) {
        this.titleService.setTitle("Annonces récentes - Débazar");
    }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('hourglass-bg')
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('hourglass-bg');
    }

    mouseWheelUpFunc() {
        if (window.scrollY == 0) {
            this.topinc++;
            if (this.topinc >= 7) {
                this.router.navigate(['/']);
            }
        } else {
            this.topinc = 0;
        }
    }

    mouseWheelDownFunc() {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {
            this.botinc++;
            if (this.botinc >= 7) {
                this.router.navigate(['/vendre-mes-jeux']);
            }
        } else {
            this.botinc = 0;
        }
    }

    toggleAbout() {
        this.isAbout = !this.isAbout;
    }
}
