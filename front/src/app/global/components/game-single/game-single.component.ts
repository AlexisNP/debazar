import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import Game from '../../models/Game';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import Editor from '../../models/Editor';

@Component({
  selector: 'app-game-single',
  templateUrl: './game-single.component.html',
  styleUrls: ['./game-single.component.scss']
})
export class GameSingleComponent implements OnInit {

    private game: Game;

    private isLoading = true;

    fasStar = fasStar;
    farStar = farStar;

    constructor(
        private titleService: Title,
        private gameService: GameService,
        private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit() {
        let id = Number(this.route.snapshot.paramMap.get('id'));

        this.gameService.findGameById(id)
        .then(values => {
            values = Object.values(values);
            console.log(values);
            
            let categories = [];
            values[12].forEach(c => {
                categories.push({ id: c.id, name: c.name});
            });
            this.game = new Game(
                values[0],
                values[1],
                values[2],
                values[3],
                values[4],
                values[5],
                values[6],
                values[9],
                values[7],
                new Editor(values[10].id, values[10].name),
                categories,
                values[13]);
        })
        .then(() => {
            this.titleService.setTitle(this.game.name + " - Fiche Débazar");
            console.log(this.game);
            
            this.isLoading = false;
        })
        .catch(() => {
            this.router.navigate(['/404'])
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
