import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import Advert from '../../models/Advert';
import User from '../../models/User';
import Game from '../../models/Game';
import Editor from '../../models/Editor';
import Category from '../../models/Category';
import { OfferService } from '../../services/offer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {

    private adverts: Advert[];

    private isLoading = true;

    constructor(private titleService: Title, private offerService: OfferService, private route: ActivatedRoute) {
        this.titleService.setTitle("Annonces - Débazar");
    }

    ngOnInit() {
        
        let id = Number(this.route.snapshot.paramMap.get('id'));
        console.log(id);
        let game = String(this.route.snapshot.paramMap.get('game'));
        console.log(game);
        
        if (id == 0 && game == 'null') { // recherche globale
            console.log("globale");
            
            this.offerService.getAllOffers()
            .then(values => {
                this.adverts = Object.values(values);
            })
            .then(() => {
                this.isLoading = false;
            })
            .catch(err => {
                console.log(err)
            });
        } else if (id != 0 && game == 'null') { // recherche par catégorie
            console.log("catégorie");

            this.offerService.findOfferByCategory(id)
            .then(values => {
                this.adverts = Object.values(values);
            })
            .then(() => {
                this.isLoading = false;
            })
            .catch(err => {
                console.log(err)
            });
        } else if (id == 0 && game != 'null') { // recherche par nom
            console.log("nom");

            this.offerService.findOfferByName(game)
            .then(values => {
                this.adverts = Object.values(values);
            })
            .then(() => {
                this.isLoading = false;
            })
            .catch(err => {
                console.log(err)
            });
        } else { // cas par défaut
            console.log("else");

            this.offerService.getAllOffers()
            .then(values => {
                this.adverts = Object.values(values);
            })
            .then(() => {
                this.isLoading = false;
            })
            .catch(err => {
                console.log(err)
            });
        }
    }
}
