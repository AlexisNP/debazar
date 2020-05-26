import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/global/services/user.service';

import { CategoryService } from 'src/app/global/services/category.service';

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

    constructor(private route: ActivatedRoute, private router: Router, private titleService: Title, private categoryServ: CategoryService) {
        this.titleService.setTitle("Vendre son jeu - Débazar");
        this.postOfferForm = new FormGroup({
            offer_game_name: new FormControl('', Validators.required),
            offer_game_genre: new FormControl('', Validators.required),
            offer_game_price: new FormControl('', Validators.required),
            offer_game_state: new FormControl('', Validators.required),
            offer_game_description: new FormControl('', Validators.required),
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('hourglass-bg');
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('hourglass-bg');
    }

    submitForm() {

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

    username() {
        return sessionStorage.getItem('username') ? true : false;
    }

}
