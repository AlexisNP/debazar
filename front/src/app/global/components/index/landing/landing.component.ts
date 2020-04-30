import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    faChevronRight = faChevronRight;

    constructor(private titleService: Title, private router: Router) {
        this.titleService.setTitle("Accueil - Débazar");
    }

    ngOnInit() {

    }

    mouseWheelDownFunc() {
        this.router.navigate(['/annonces-jeux-recentes']);
    }

}
