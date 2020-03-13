import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public menu: Array<Object>;

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
                url: "/jeux",
                text: "Jeux"
            }
        ]
    }

}
