import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Advert from '../../models/Advert';


@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {

    private adverts: Advert[];

    constructor(private titleService: Title) {
        this.titleService.setTitle("Annonces - Débazar");
    }

    ngOnInit() {

    }

}
