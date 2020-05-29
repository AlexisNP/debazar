import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faQuestion, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    private botinc: number = 0;

    private isAbout = false;

    faChevronRight = faChevronRight;
    faQuestion = faQuestion;
    faTimes = faTimes;

    constructor(private titleService: Title, private router: Router) {
        this.titleService.setTitle("Accueil - Débazar");
    }

    ngOnInit() {

    }

    mouseWheelDownFunc() {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            this.botinc++;
            if (this.botinc >= 7) {
                this.router.navigate(['/annonces-jeux-recentes']);
            }
        } else {
            this.botinc = 0;
        }
    }

    toggleAbout() {
        this.isAbout = !this.isAbout;
    }

}
