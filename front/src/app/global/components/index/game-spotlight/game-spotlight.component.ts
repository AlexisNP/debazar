import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import Game from 'src/app/global/models/Game';
import Editor from 'src/app/global/models/Editor';
import Category from 'src/app/global/models/Category';

@Component({
  selector: 'app-game-spotlight',
  templateUrl: './game-spotlight.component.html',
  styleUrls: ['./game-spotlight.component.scss']
})
export class GameSpotlightComponent implements OnInit, OnDestroy {

    private games: Game[];

    private topinc: number = 0;

    constructor(private titleService: Title, private router: Router) {
        this.titleService.setTitle("Meilleurs Jeux - Débazar");

        this.games = [
            new Game(942, "The Mind", "https://cdn3.philibertnet.com/401610-thickbox_default/the-mind.jpg", "Avec The Mind, constituez une suite croissante de numéros avec les autres joueurs. Jouez en collaboration, mais sans la moindre communication. Dans The Mind, jouez en équipe mais en silence. Sentez le jeu et faites preuve de patience ! The Mind contient des cartes numérotées de 1 à 100. Votre objectif sera de compléter collectivement tous les niveaux en constituant une suite croissante. Dans un niveau, chaque joueur reçoit une main de cartes égale au nombre de cartes du niveau : une carte dans le niveau 1, deux cartes dans le niveau 2, et ainsi de suite. Pour réussir un niveau, toutes les cartes doivent être jouée dans l'ordre. Chaque joueur connaît ses cartes, mais uniquement les siennes.", 4, "Éternité", new Date(), 3, 4, new Editor(1, "Bob"), new Category(1, "Jeu de coopération"), null),
        ];
    }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('hourglass-bg');
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('hourglass-bg');
    }

    mouseWheelUpFunc() {
        if (window.scrollY == 0) {
            this.topinc++;
            if (this.topinc >= 7) {
                this.router.navigate(['/top-jeux-societe']);
            }
        } else {
            this.topinc = 0;
        }
    }

}
