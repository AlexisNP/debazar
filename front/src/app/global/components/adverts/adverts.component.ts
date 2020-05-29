import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import Advert from '../../models/Advert';
import User from '../../models/User';
import Game from '../../models/Game';
import Editor from '../../models/Editor';
import Category from '../../models/Category';
import { OfferService } from '../../services/offer.service';


@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {

    private adverts: Advert[];

    private isLoading = true;

    constructor(private titleService: Title, private offerService: OfferService) {
        this.titleService.setTitle("Annonces - Débazar");
    }

    ngOnInit() {
        this.offerService.getAllOffers()
        .then(values => {
            this.adverts = Object.values(values);
        })
        .then(() => {
            this.isLoading = false;
        })
        .catch(err => {
            console.log(err)
        })
    }

}
