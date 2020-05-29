import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/global/services/user.service';

import { CategoryService } from 'src/app/global/services/category.service';
import Game from 'src/app/global/models/Game';
import { State } from 'src/app/global/models/State';
import { GameService } from 'src/app/global/services/game.service';
import { StateService } from 'src/app/global/services/state.service';
import { OfferService } from 'src/app/global/services/offer.service';
import { AuthService } from 'src/app/Authentication/services/auth.service';
import User from 'src/app/global/models/User';

@Component({
  selector: 'app-sell-games',
  templateUrl: './sell-games.component.html',
  styleUrls: ['./sell-games.component.scss']
})
export class SellGamesComponent implements OnInit, OnDestroy {

    private postOfferForm: FormGroup;
    private submitted = false;
    private loading = true;
    private returnUrl: string;

    private topinc: number = 0;
    private botinc: number = 0;

    private games: Game[] = null;
    private states: State[] = null;

    private chkGame = false;
    private chkPrice = false;
    private chkState = false;
    private chkDescription = false;
    private isSubmitted = false;

    public offer = new FormGroup({
        game: new FormControl(),
        seller: new FormControl(),
        state: new FormControl(),
        detail: new FormControl(),
        price: new FormControl(),
    })

    constructor(private route: ActivatedRoute, private router: Router, 
                private titleService: Title, private gameServ: GameService,
                private stateServ: StateService, private offerServ: OfferService,
                private authServ: AuthService) {
        this.titleService.setTitle("Vendre son jeu - Débazar");
        this.postOfferForm = new FormGroup({
            offer_game_name: new FormControl('', Validators.required),
            offer_game_price: new FormControl('', Validators.required),
            offer_game_state: new FormControl('', Validators.required),
            offer_game_description: new FormControl('', Validators.required),
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('hourglass-bg');

        this.stateServ.getAllStates().subscribe(data => {
            this.states = data;
        }, error => {console.log("Error", error);
        });

        this.gameServ.getAllGames()
        .then(values => {
            this.games = Object.values(values)
        })
        .catch(err => {
            console.log(err)
        })
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('hourglass-bg');
    }

    resetChk() {
        this.chkGame = false;
        this.chkPrice = false;
        this.chkState = false;
        this.chkDescription = false;
        this.offer = new FormGroup({
            game: new FormControl(''),
            seller: new FormControl(''),
            state: new FormControl(''),
            detail: new FormControl(''),
            price: new FormControl(''),
        });
    }

    submitForm() {
        this.resetChk();
    
        // console.log(this.postOfferForm.value);
    
        this.isSubmitted = true;
        
        if (this.postOfferForm.get('offer_game_name').value == '') {
          this.chkGame = true;
          console.log("Missing game");
          return;
        }
        if (this.postOfferForm.get('offer_game_price').value == '' || this.postOfferForm.get('offer_game_price').value == null) {
          this.chkPrice = true;
          console.log("Missing game price");
          return;
        }
        if (this.postOfferForm.get('offer_game_state').value == '') {
          this.chkState = true;
          console.log("Missing game state");
          return;
        }
        if (this.postOfferForm.get('offer_game_description').value.trim() == '') {
          this.chkDescription = true;
          console.log("Missing description");
          return;
        }
        
        // console.log('passed');

        let username = sessionStorage.getItem('username');

        let seller: User;
        this.authServ.getUserByUsername(username).subscribe(data => {
            // console.log(data),
            seller = data;
          }, error => {console.log('Error', error);
        });
    
        setTimeout(() => {
          this.offer.get('game').setValue(this.postOfferForm.get('offer_game_name').value);
          this.offer.get('state').setValue(this.postOfferForm.get('offer_game_state').value);
          this.offer.get('detail').setValue(this.postOfferForm.get('offer_game_description').value);
          this.offer.get('price').setValue(this.postOfferForm.get('offer_game_price').value);
          this.offer.get('seller').setValue(seller);

          setTimeout(() => {
            console.log('before: ' , this.offer.value);
            
            this.offerServ.addOffer(this.offer.value);
          }, 2000);
          
        }, 1000);
    }

    mouseWheelUpFunc() {
        if (window.scrollY == 0) {
            this.topinc++;
            if (this.topinc >= 7) {
                this.router.navigate(['/annonces-jeux-recentes']);
            }
        } else {
            this.topinc = 0;
        }
    }

    mouseWheelDownFunc() {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            this.botinc++;
            if (this.botinc >= 7) {
                this.router.navigate(['/top-jeux-societe']);
            }
        } else {
            this.botinc = 0;
        }
    }

    chkLogged() {
        if (this.authServ.isLogged) {
            return true;
        } else {
            return false;
        }
    }

}
