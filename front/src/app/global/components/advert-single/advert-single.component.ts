import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { faStar as fasStar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import Advert from '../../models/Advert';
import { OfferService } from '../../services/offer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advert-single',
  templateUrl: './advert-single.component.html',
  styleUrls: ['./advert-single.component.scss']
})
export class AdvertSingleComponent implements OnInit {

    private advert: Advert;

    fasStar = fasStar;
    farStar = farStar;
    faEnvelope = faEnvelope;
    faPhone = faPhone;

    constructor(private titleService: Title, private offerService: OfferService,  private route: ActivatedRoute) {
    }

    ngOnInit() {
        let id = Number(this.route.snapshot.paramMap.get('id'));

        this.offerService.findOfferById(id)
        .then(values => {
            values = Object.values(values)
            console.log(values)
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
