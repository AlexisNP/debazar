import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { faStar as fasStar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

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

    fasStar = fasStar;
    farStar = farStar;
    faEnvelope = faEnvelope;
    faPhone = faPhone;

    constructor(private titleService: Title) {
    }

    ngOnInit() {

        this.titleService.setTitle(this.advert.game.name + " - Annonce Débazar");
    }

}
