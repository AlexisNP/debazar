import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import Advert from '../../models/Advert';
import User from '../../models/User';
import Game from '../../models/Game';
import Editor from '../../models/Editor';
import Category from '../../models/Category';


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
        let games = [
            new Game(942, "Monopoly", "https://www.kroger.com/product/images/xlarge/front/0063050951263", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 4, "Éternité", new Date(), 3, 4, new Editor(1, "Bob"), new Category(1, "Jeu de plateau")),
            new Game(14887, "Uno", "https://images-na.ssl-images-amazon.com/images/I/810US3NaiqL._AC_SX425_.jpg", "Description", 8, "Éternité", new Date(), 2, 4, new Editor(2, "Jean-Luc Games"), new Category(2, "Jeu à deux")),
            new Game(6148, "Échecs traditionnels", "https://images-na.ssl-images-amazon.com/images/I/810US3NaiqL._AC_SX425_.jpg", "Description", 2, "Éternité", new Date(), 5, 4, new Editor(3, "Monsieur Poulpe"), new Category(3, "Jeu de rôles")),
        ];

        let users = [
            new User("Leviathan69", "John", "Doe", "user.name@doe.org", "Homme", null, "#596d7f", true, false, "poulet"),
            new User("Moltenein", "Sarah", "Connor", "user.name@sarah.org", "Femme", null, "#a2ec77", true, false, "braisé"),
            new User("Pascal", "Titto", "Surfshack", "user.name@lel.net", "Autre", null, "#903b70", true, false, "aux frites"),
            new User("UltimatorLeBronzeux", "Jean-Pierre", "Kevin", "yahoo@yahoo.com", "Non-renseigné", null, "#f5274c", true, false, "SECURITE"),
        ];
        
        this.adverts = [
            new Advert(1461, games[0], users[0], new Date(), 845, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Abimé"),
            new Advert(7942367, games[2], users[3], new Date(), 41.99, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Presque neuf"),
            new Advert(16596, games[1], users[2], new Date(), 0.99, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Neuf"),
            new Advert(6969, games[2], users[1], new Date(), 15, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Usé"),
            new Advert(1461, games[0], users[0], new Date(), 845, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Abimé"),
            new Advert(7942367, games[2], users[3], new Date(), 41.99, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Presque neuf"),
            new Advert(16596, games[1], users[2], new Date(), 0.99, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Neuf"),
            new Advert(6969, games[2], users[1], new Date(), 15, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Usé"),
            new Advert(1461, games[0], users[0], new Date(), 845, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Abimé"),
            new Advert(7942367, games[2], users[3], new Date(), 41.99, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Presque neuf"),
            new Advert(16596, games[1], users[2], new Date(), 0.99, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Neuf"),
            new Advert(6969, games[2], users[1], new Date(), 15, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Usé"),
            new Advert(1461, games[0], users[0], new Date(), 845, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Abimé"),
            new Advert(7942367, games[2], users[3], new Date(), 41.99, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Presque neuf"),
            new Advert(16596, games[1], users[2], new Date(), 0.99, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Neuf"),
            new Advert(6969, games[2], users[1], new Date(), 15, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Usé"),
        ];
    }

}
