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
        let game = new Game(94, "Monopoly", "https://www.kroger.com/product/images/xlarge/front/0063050951263", "Un jeu qui ravira petits et grands", 4, "2 jours", new Date(), 4, 15, new Editor(1, "Jeux&Cie"), new Category(4, "Jeux de plateau"));
        let user = new User("Leviathan69", "John", "Doe", "user.name@doe.org", "Homme", null, "#596d7f", true, false, "poulet");
        this.advert = new Advert(94, game, user, new Date(), 150, "Texte de description de l'annonce", "Presque neuf");
        this.titleService.setTitle(this.advert.game.name + " - Annonce Débazar");
    }

}
