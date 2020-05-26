import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import Game from '../../models/Game';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';

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

    constructor(private titleService: Title, private gameService: GameService, private route: ActivatedRoute) {}

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.gameService.findGameById(+id).subscribe(data => {
            console.log("data:", data),
            this.game = data;
          }, error => {console.log("Error", error);
          });
        setTimeout(() => {
            this.titleService.setTitle(this.game.name + " - Fiche Débazar");
            this.isLoading = false;
        }, 1000);
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
