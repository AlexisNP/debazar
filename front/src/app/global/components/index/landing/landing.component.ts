import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    faChevronRight = faChevronRight;

    constructor(private titleService: Title) {
        this.titleService.setTitle("Accueil - Débazar");
    }

    ngOnInit() {

    }

}
