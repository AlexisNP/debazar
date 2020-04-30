import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
// import { ClickOutsideDirective } from "../../../directives/ClickOutsideElementDirective";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    faUser = faUser;
    faBoxOpen = faBoxOpen;
    active = false;

    constructor() {
        
    }

    ngOnInit() {
        
    }

    burgerToggle() {
        this.active = !this.active;
    }

}
