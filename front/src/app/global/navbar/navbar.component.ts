import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public menu: Array<Object>;

    faUser = faUser;
    faBoxOpen = faBoxOpen;

    constructor() {
    }

    ngOnInit() {
        this.menu = [
            {
                url: "/",
                text: "Accueil"
            },
            {
                url: "/annonces",
                text: "Annonces"
            },
            {
                url: "/vendre-mon-jeu",
                text: "Vendre mon jeu"
            },
            {
                url: "/autour-de-moi",
                text: "Autour de moi"
            }
        ]
    }

}
