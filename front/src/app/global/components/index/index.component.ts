import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import Game from 'src/app/global/models/Game'
import Editor from 'src/app/global/models/Editor';
import Advert from 'src/app/global/models/Advert';
import User from 'src/app/global/models/User';
import Category from 'src/app/global/models/Category';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    private usersList: User[];
    private popularGamesList: Game[];
    private spotlightGame: Game;
    private advertsList: Advert[];
    private username: string;

    constructor(private userService: UserService) {
        this.username = userService.getUser();
    }

    ngOnInit() {
        this.usersList = [
            new User("Leviathan69", "John", "Doe", "user.name@doe.org", "Homme", null, "#596d7f", true, false, "poulet"),
            new User("Moltenein", "Sarah", "Connor", "user.name@sarah.org", "Femme", null, "#a2ec77", true, false, "braisé"),
            new User("Pascal", "Titto", "Surfshack", "user.name@lel.net", "Autre", null, "#903b70", true, false, "aux frites"),
            new User("UltimatorLeBronzeux", "Jean-Pierre", "Kevin", "yahoo@yahoo.com", "Non-renseigné", null, "#f5274c", true, false, "SECURITE"),
        ];
        this.popularGamesList = [
            new Game(942, "Monopoly", "https://www.kroger.com/product/images/xlarge/front/0063050951263", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 4, "Éternité", new Date(), 3, 4, new Editor(1, "Bob"), new Category(1, "Jeu de plateau")),
            new Game(14887, "Uno", "https://images-na.ssl-images-amazon.com/images/I/810US3NaiqL._AC_SX425_.jpg", "Description", 8, "Éternité", new Date(), 2, 4, new Editor(2, "Jean-Luc Games"), new Category(2, "Jeu à deux")),
            new Game(6148, "Échecs traditionnels", "https://images-na.ssl-images-amazon.com/images/I/810US3NaiqL._AC_SX425_.jpg", "Description", 2, "Éternité", new Date(), 5, 4, new Editor(3, "Monsieur Poulpe"), new Category(3, "Jeu de rôles")),
        ];
        this.advertsList = [
            new Advert(1461, this.popularGamesList[0], this.usersList[0], new Date(), 845, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Abimé"),
            new Advert(7942367, this.popularGamesList[2], this.usersList[3], new Date(), 41.99, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Presque neuf"),
            new Advert(16596, this.popularGamesList[1], this.usersList[2], new Date(), 0.99, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Neuf"),
            new Advert(6969, this.popularGamesList[2], this.usersList[1], new Date(), 15, "Description de l'annonce, ici, on pourra caser un petit texte descriptif comme l'état du truc.", "Usé"),
        ];
        this.spotlightGame = this.popularGamesList[1];
    }

}
