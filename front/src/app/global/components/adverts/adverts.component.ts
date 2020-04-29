import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {

    constructor(private titleService: Title) {
        this.titleService.setTitle("Annonces - Débazar");
    }

    ngOnInit() {

    }

}
