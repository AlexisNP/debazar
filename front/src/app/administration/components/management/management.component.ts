import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Game from 'src/app/global/models/Game';
import { GameService } from 'src/app/global/services/game.service';
import { BestGameService } from 'src/app/global/services/best-game.service';
import { PopularGameService } from 'src/app/global/services/popular-game.service';
import { PopularGame } from 'src/app/global/models/PopularGame';
import { BestGame } from 'src/app/global/models/BestGame';
import Editor from 'src/app/global/models/Editor';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  listGames: Game[];
  popularGamesNow: PopularGame[];
  bestGameNow: BestGame;

  popularForm = new FormGroup({
    game_popular: new FormControl('', Validators.required)
  });

  bestForm = new FormGroup({
    game_best: new FormControl('', Validators.required)
  });

  private isLoadingPopular = true;
  private isLoadingBest = true;
  private isLoadingGames = true;

  constructor(private gameServ: GameService, private bestServ: BestGameService, 
              private popularServ: PopularGameService) { }

  public popularGame = new FormGroup({
    game: new FormControl(),
    date: new FormControl()
  })
  public bestGame = new FormGroup({
    game: new FormControl(),
    date: new FormControl()
  })

  ngOnInit() {
    this.gameServ.getAllGames()
    .then(values => {
        this.listGames = Object.values(values);
    })
    .then(() => {
        this.isLoadingGames = false;
    })
    .catch(err => {
        console.log(err)
    })

    this.popularServ.get3populars()
    .then(values => {
        this.popularGamesNow = Object.values(values);
    })
    .then(() => {
        this.isLoadingPopular = false;
    })
    .catch(err => {
        console.log(err)
    })

    this.bestServ.getbest()
    .then(values => {
        values = Object.values(values);
        console.log(values);
          
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

        let bestGameNow = new BestGame(
          values[0],
          game, 
          values[2]
        )

        return bestGameNow;
    })
    .then(() => {
        this.isLoadingBest = false;
        console.log(this.bestGameNow);
    })
    .catch(err => {
        console.log(err)
    })
  }

  resetForm() {
    this.popularGame = new FormGroup({
      game: new FormControl(),
      date: new FormControl()
    })
    this.bestGame = new FormGroup({
      game: new FormControl(),
      date: new FormControl()
    })
  }

  submitBest() {
    this.resetForm();
    this.popularServ.addPopularGame(this.popularForm.get('game_popular').value);
    console.log('manque un reload');
  }

  submitPopular() {
    this.resetForm();
    this.popularServ.addPopularGame(this.popularForm.get('game_popular').value);
    console.log('manque un reload');
  }
}
