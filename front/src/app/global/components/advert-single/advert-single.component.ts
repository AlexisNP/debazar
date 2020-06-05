import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// Date
import { formatDate } from '@angular/common';

import { faStar as fasStar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import { OfferService } from '../../services/offer.service';

import Advert from '../../models/Advert';
import Game from '../../models/Game';
import Editor from '../../models/Editor';
import Category from '../../models/Category';
import User from '../../models/User';

@Component({
  selector: 'app-advert-single',
  templateUrl: './advert-single.component.html',
  styleUrls: ['./advert-single.component.scss']
})
export class AdvertSingleComponent implements OnInit {

    private advert: Advert;

    private mailSubject: string;

    private isLoading = true;

    fasStar = fasStar;
    farStar = farStar;
    faEnvelope = faEnvelope;
    faPhone = faPhone;

    constructor(
        private titleService: Title,
        private offerService: OfferService,
        private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit() {
        let id = Number(this.route.snapshot.paramMap.get('id'));

        this.offerService.findOfferById(id)
        .then(values => {
            values = Object.values(values);

            let extensions = [];
            let categories = [];
            values[1].categories.forEach(c => {
                categories.push({ id: c.id, name: c.name});
            });
            values[1].expansions.forEach(e => {
                extensions.push({ id: e.id, name: e.name});
            })

            let editor = new Editor(
                values[1].editor.id,
                values[1].editor.name
            );
            let game = new Game(
                values[1].id,
                values[1].name,
                values[1].image,
                values[1].description,
                values[1].players,
                values[1].duration,
                values[1].published,
                values[1].rating,
                values[1].age,
                editor,
                categories,
                extensions,
            );
            
            let user = new User(
                values[2].name,
                values[2].firstname,
                values[2].lastname,
                values[2].mail_address,
                values[2].gender,
                values[2].avatar,
                values[2].colour,
                values[2].verified,
                values[2].banned,
                "",
            );

            let advert = new Advert(
                values[0],
                game,
                user,
                formatDate(new Date(), 'EEEE dd MMMM', 'fr'),
                values[5],
                values[4],
                values[3].name,
            )

            return advert;
        })
        .then(values => {
            this.advert = values;
            this.mailSubject = "R%C3%A9ponse%20%C3%A0%20l%27annonce%20n%C2%B0" + this.advert.id + "%20-%20D%C3%A9bazar"
        })
        .then(() => {
            this.titleService.setTitle(this.advert.game.name + " - Annonce Débazar");
            this.isLoading = false;
            console.log(this.advert);
        })
        .catch(err => {
            console.log(err)
        })
    }

    ratingStars(stars: number) {
        let output = [];
        for (let index = 0; index < 5; index++) {
            if (stars > 0) {
                output.push(1);
            } else {
                output.push(0);
            }
            stars--;
        }
        return output;
    }

}
