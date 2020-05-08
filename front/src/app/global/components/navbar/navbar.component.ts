import { Component, OnInit, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import Category from '../../models/Category';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Input() categories: Category[];

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
